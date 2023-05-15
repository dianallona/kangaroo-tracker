import Button from "devextreme-react/button";
import DataGrid, {
  Button as GridButton,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../context/state";
import styles from "./ListKangaroos.module.scss";

const columns = ["ID", "Name", "Birthday", "Weight", "Height", "Friendliness"];

const ListKangaroos = () => {
  const { kangarooList: rows } = useAppContext();
  const router = useRouter();

  const handleAddBtn = () => {
    router.push("/add");
  };

  const handleEditBtn = (e) => {
    const rowData = e.row.data;
    router.push(`/edit/${rowData.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>List of Kangaroos</h1>
        <Button text="Add" icon="add" height="40px" onClick={handleAddBtn} />
      </div>
      <DataGrid dataSource={rows} keyExpr="id" repaintChangesOnly>
        <Column dataField="id" caption="ID" />
        <Column dataField="name" caption="Name" />
        <Column dataField="birthday" caption="Birthday" />
        <Column dataField="weight" caption="Weight" />
        <Column dataField="height" caption="Height" />
        <Column dataField="friendliness" caption="Friendliness" />
        <Editing
          mode="row"
          useIcons={true}
          allowUpdating={false}
          allowDeleting={false}
        />
        <Column type="buttons" width={60} caption="Edit">
          <GridButton hint="edit" icon="edit" onClick={handleEditBtn} />
        </Column>
      </DataGrid>
    </div>
  );
};

export default ListKangaroos;
