import React, { useCallback, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Search = ({ onSymbolChange }) => {
  const [criteria, setCriteria] = useState('');

  const API_KEY = 'N4FQQ6B7UPUYW3GO';
  let API_CALL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${criteria}&apikey=${API_KEY}`;

  const handleChange = useCallback((e) => {
    setCriteria(e.target.value);
    // if (e.target.value !== '') {
    //   fetch(API_CALL)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     });
    // }
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        const value = criteria.toUpperCase();
        onSymbolChange(value);
        setCriteria(value);
      }
    },
    [onSymbolChange, criteria]
  );

  const list = [
    {name: 'name1', desc: 'description1'},
    {name: 'name2', desc: 'description2'},
  ]

  return (
    <div className="p-3">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>종목 심볼 검색</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="종목 심볼을 입력하세요 (예, IBM, AMZN, FB 등)"
          aria-label="symbol"
          value={criteria}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
