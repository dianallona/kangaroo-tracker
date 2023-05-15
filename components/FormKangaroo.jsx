import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useId } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactSelect from "react-select";
import * as Yup from "yup";
import { useAppContext } from "../context/state";
import styles from "./FormKangaroo.module.scss";

const optionsGender = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];
const optionsFriendliness = [
  { value: "friendly", label: "Friendly" },
  { value: "not friendly", label: "Not Friendly" },
];

const initialFormValue = {
  nickname: "",
  color: "",
  birthday: new Date(),
};

const FormKangaroo = ({ initialValues, onSubmit }) => {
  const id = useId();
  const router = useRouter();
  const { kangarooList } = useAppContext();

  const KangarooSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name must be required.")
      .test("unique-name", "Name must be unique.", (value) => {
        return !kangarooList.some((kangaroo) => kangaroo.name === value);
      }),
    weight: Yup.number()
      .required("Weight must be required.")
      .positive("Weight must be a positive number"),
    height: Yup.number()
      .required("Height must be required.")
      .positive("Height must be a positive number"),
    gender: Yup.mixed()
      .oneOf(["Female", "Male"])
      .required("Gender must be required."),
    birthday: Yup.date().required("Birthday must be required."),
  });

  return (
    <div className={styles.container}>
      <Formik
        initialValues={
          typeof initialValues === "undefined"
            ? initialFormValue
            : initialValues
        }
        validationSchema={KangarooSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit?.(values);
          setSubmitting(false);
          router.push("/");
        }}
      >
        {({
          isSubmitting,
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          errors,
          touched,
        }) => {
          return (
            <Form>
              <label htmlFor="name">
                Name: <span className={styles.required}>*</span>
              </label>
              <Field type="text" name="name" />
              <ErrorMessage
                className={styles.required}
                name="name"
                component="div"
              />
              <label htmlFor="nickname">Nickname:</label>
              <Field type="text" name="nickname" />
              <ErrorMessage
                className={styles.required}
                name="nickname"
                component="div"
              />
              <label htmlFor="weight">
                Weight: <span className={styles.required}>*</span>
              </label>
              <Field type="number" name="weight" step="0.01" min={0} />
              <ErrorMessage
                className={styles.required}
                name="weight"
                component="div"
              />
              <label htmlFor="height">
                Height: <span className={styles.required}>*</span>
              </label>
              <Field type="number" name="height" step="0.01" min={0} />
              <ErrorMessage
                className={styles.required}
                name="height"
                component="div"
              />
              <label htmlFor="gender">
                Gender: <span className={styles.required}>*</span>
              </label>
              <Field name="gender">
                {({ field }) => (
                  <ReactSelect
                    id={`gender-${id}`}
                    className="basic-single"
                    classNamePrefix="select"
                    name="gender"
                    {...{
                      ...field,
                      value: optionsGender.find(
                        (option) => option.label === field.value
                      ),
                    }}
                    options={optionsGender}
                    onChange={(option) => setFieldValue("gender", option.label)}
                    onBlur={() => setFieldValue("gender", field.value)}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.required}
                name="gender"
                component="div"
              />
              <label htmlFor="color">Color:</label>
              <Field type="text" name="color" />
              <ErrorMessage
                className={styles.required}
                name="color"
                component="div"
              />
              <label htmlFor="friendliness">Friendliness:</label>
              <Field name="friendliness">
                {({ field }) => {
                  return (
                    <ReactSelect
                      id={`friendliness-${id}`}
                      className="basic-single"
                      classNamePrefix="select"
                      {...{
                        ...field,
                        value: optionsFriendliness.find((option) => {
                          return option.label === field.value;
                        }),
                      }}
                      options={optionsFriendliness}
                      onChange={(option) => {
                        setFieldValue("friendliness", option.label);
                      }}
                      onBlur={() => setFieldValue("friendliness", field.value)}
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                className={styles.required}
                name="friendliness"
                component="div"
              />
              <label htmlFor="birthday">
                Birthday: <span className={styles.required}>*</span>
              </label>
              <ReactDatePicker
                name="birthday"
                showIcon
                selected={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                className={styles.required}
                name="birthday"
                component="div"
              />
              <div className={styles.btn_container}>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormKangaroo;
