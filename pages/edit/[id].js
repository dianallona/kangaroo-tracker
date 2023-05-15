import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FormKangaroo from "../../components/FormKangaroo";
import { useAppContext } from "../../context/state";

const Edit = () => {
  const router = useRouter();
  const { kangarooList, editKangaroo } = useAppContext();
  const id = Number(router.query.id);
  const kangarooDetails = kangarooList.find((kangaroo) => kangaroo.id === id);

  useEffect(() => {
    if (typeof kangarooDetails === "undefined") router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kangarooDetails]);

  const handleOnSubmit = (values) => {
    editKangaroo(values);
  };

  return (
    <div className="edit-container">
        <h1>Edit {kangarooDetails?.name}</h1>
        <FormKangaroo
          initialValues={kangarooDetails}
          onSubmit={handleOnSubmit}
        />
    </div>
  );
};

export default Edit;
