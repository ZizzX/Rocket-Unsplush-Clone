import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { api } from "./apiUnsplush";
import Loader from "./Components/loader/Loader";
import Header from "./Components/header/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faHistory,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faHistory, faSearch);

function App() {
  const [photosData, setPhotosData] = useState({
    photos: [],
    page: 1,
    perPage: 14,
    isLoading: false
  });

  const [searchResults, setSearchResults] = useState([]);

  const onSearchInput = useCallback(
    (term) => {
      setSearchResults(term);
    },
    [searchResults]
  );

  const getPhotos = useCallback((page, perPage) => {
    api.photos.list({ page: page, perPage: perPage }).then((data) => {
      if (data) {
        let paginatedData = data.response.results;
        setPhotosData((prev) => ({
          ...prev,
          photos:
            page === 1
              ? [...paginatedData]
              : prev.photos.concat([...paginatedData]),
          isLoading: false
        }));
      }
    });
  }, []);

  useEffect(() => {
    getPhotos(1, 14);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight + 300 &&
      !photosData.isLoading
    ) {
      setPhotosData((prev) => ({
        ...prev,
        page: prev.page + 1,
        isLoading: true
      }));
      getPhotos(photosData.page + 1, 14);
    }
  };

  const { photos, isLoading } = photosData;

  let loader;

  if (photos.length < 0 || isLoading) {
    loader = <Loader />;
  }

  return (
    <div className="App">
      <Header search={onSearchInput} searchResults={searchResults} />
      {loader}
    </div>
  );
}

export default App;
