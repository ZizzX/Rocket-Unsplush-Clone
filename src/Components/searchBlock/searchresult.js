import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchResultBlock = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  height: 21px;
  width: 90%;
  overflow: hidden;
  position: relative;
  & > span {
    margin: 0 5px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      transparent 50%,
      #000 100%
    );
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
