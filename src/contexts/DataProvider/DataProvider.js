import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

    const dataValue = {destinations}
    return (
        <DataContext.Provider value={dataValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;