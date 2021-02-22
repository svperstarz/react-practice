import React, { useCallback, useState } from "react";
import Search from "./Search";
import Chart from "./Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [symbol, setSymbol] = useState('');

  const handleSymbolChange = useCallback((text) => {
    setSymbol(text);
  });

  return (
    <>
      <Search onSymbolChange={handleSymbolChange} />
      <Chart symbol={symbol} />
    </>
  );
};

export default App;
