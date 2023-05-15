import React from "react";
import ListKangaroos from "../components/ListKangaroos";
import { useAppContext } from "../context/state";

const Home = () => {
  const val = useAppContext();

  return <ListKangaroos />;
};

export default Home;
