import React, { Component, useEffect, useState } from "react";
import Plot from 'react-plotly.js';

const Chart = ({ symbol }) => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  useEffect(() => {
    if (symbol !== '') {
      fetchData();
    }
  }, [symbol]);

  const fetchData = () => {
    const API_KEY = 'N4FQQ6B7UPUYW3GO';
    // const API_KEY = 'demo';
    const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;

    let xVals = [];
    let yVals = [];

    fetch(API_CALL)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);
          for (var date in data['Time Series (Daily)']) {
            xVals.push(date);
            yVals.push({
              open: data['Time Series (Daily)'][date]['1. open'],
              high: data['Time Series (Daily)'][date]['2. high'],
              low: data['Time Series (Daily)'][date]['3. low'],
              close: data['Time Series (Daily)'][date]['4. close'],
            });
          }

          setXValues(xVals);
          setYValues(yVals);
        }
      );
  };

  return (
    <div>
      <Plot
        data={[
          {
            type: "candlestick",
            xaxis: "x",
            yaxis: "y",

            x: xValues,

            open: yValues.map(({ open }) => open),
            high: yValues.map(({ high }) => high),
            low: yValues.map(({ low }) => low),
            close: yValues.map(({ close }) => close),
          },
        ]}
        layout={{ height: '600' }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default Chart;
