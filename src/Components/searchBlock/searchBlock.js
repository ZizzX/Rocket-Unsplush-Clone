import React, { useState, useEffect, useCallback} from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SearchForm = styled.form`
  width: 100%;
  margin: 40px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    width: 100%;
    height: 1px;
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
    const { onSearch } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, [searchTerm])

    useEffect(() => {
        const result = searchTerm.toLowerCase();
        onSearch(result);
    }, [searchTerm])

  return (
    <Row className="justify-content-md-center">
      <Col md={10} sm={12}>
        <SearchForm>
          <SearchInput 
            type="text" 
            placeholder="Поиск" 
            value={searchTerm}  
            onChange={ handleChange } />
          <div />
        </SearchForm>
      </Col>
    </Row>
  );
};

export default SearchBlock;
