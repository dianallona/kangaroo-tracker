import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [kangarooList, setKangarooList] = useState([]);

  const addKangaroo = (kangarooDetail) => {
    setKangarooList((prev) => [
      ...prev,
      { id: prev.length + 1, ...kangarooDetail },
    ]);
  };

  const editKangaroo = (kangarooDetail) => {
    setKangarooList((prev) =>
      prev.map((p) => {
        if (p.id === kangarooDetail.id) {
          return kangarooDetail;
        }

        return p;
      })
    );
  };

  return (
    <AppContext.Provider value={{ kangarooList, addKangaroo, editKangaroo }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
