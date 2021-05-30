import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import SearchBlockResult from "./searchresult";
import { Grid } from "@material-ui/core";
import FadeIn from "../fadeIn";

const SearchForm = styled.form`
  width: 100%;
  position: relative;
  overflow: hidden;
  /* margin: 40px 0px 0px 0px; */
  padding: 78px 0 91px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  & .search-line {
    overflow: hidden;
    width: 100%;
    margin-bottom: 30px;
    height: 2px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0.4990371148459384) 26%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4990371148459384) 74%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100px;
  background: #000000;
  border: none;
  text-align: center;
  color: #ffffff;
  font-size: 72px;
  outline: none;
  &::placeholder {
    color: #ffffff;
    font-size: 72px;
  }
`;

const SearchBlock = (props) => {
  const { onSearch, searchResults } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [searchTerm]
  );

  const onSubmitSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <SearchForm onSubmit={onSubmitSearch}>
        <SearchInput
          type="text"
          placeholder="Поиск"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="search-line" />
        <SearchBlockResult wrap="nowrap" searchResult={searchResults} />
      </SearchForm>
    </Grid>
  );
};

export default SearchBlock;
