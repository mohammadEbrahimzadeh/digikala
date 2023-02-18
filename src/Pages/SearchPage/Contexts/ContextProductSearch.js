import { createContext, useState } from "react";
export const DataForApi = createContext();
const DataProvider = ({ children }) => {
  const [MinValuePrice, setMinValuePrice] = useState(0);
  const [MaxValuePrice, setMaxValuePrice] = useState(100000000);
  const [NumberOfPageResult, setNumberOfPageResult] = useState(1);

  return (
    <DataForApi.Provider
      value={{
        MinValueContextPrice: [MinValuePrice, setMinValuePrice],
        MaxValueContextPrice: [MaxValuePrice, setMaxValuePrice],
        NumberOfPageResultContext: [NumberOfPageResult, setNumberOfPageResult],
      }}
    >
      {children}
    </DataForApi.Provider>
  );
};
export default DataProvider;
