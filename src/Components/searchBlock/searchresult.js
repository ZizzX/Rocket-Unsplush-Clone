import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchResultBlock = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  height: 21px;
  width: 90%;
  background: linear-gradient(90deg, #000 0%, #000 50%);
  overflow: hidden;
  & > span {
    margin: 0 5px;
  }
`;

const SearchResult = (props) => {
  const { wrap, searchResult } = props;
  const [result, setResult] = useState([]);

  useEffect(() => {
    resultSearch(searchResult);
    // console.log(result);
  }, [searchResult]);

  const resultSearch = (term) => {
    if (term) {
      setResult((prev) => [...prev, term]);
    }
  };

  return (
    <SearchResultBlock wrap={wrap}>
      {result.map((term, i) => {
        return <span key={i}>{` ${term}`}</span>;
      })}
    </SearchResultBlock>
  );
};

export default SearchResult;
