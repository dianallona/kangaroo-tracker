import React from "react";
import FormKangaroo from "../components/FormKangaroo";
import { useAppContext } from "../context/state";

const Add = () => {
  const { kangarooList, addKangaroo } = useAppContext();
  const handleOnSubmit = (values) => {
    addKangaroo(values);
  };
  return (
    <div className="add-container">
        <h1>Add Kangaroo</h1>
        <FormKangaroo onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Add;
