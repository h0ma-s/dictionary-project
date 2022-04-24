import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState();

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchPexels() {
    const pexelsApiKey =
      "563492ad6f91700001000001f90c3db3c7464f9db95264435806af97";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleResponse(response) {
    setLoaded(true);
    setResults(response.data);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    searchPexels();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="pb-5">
          <h2 className="text-center">
            Which word do you want to learn today?
          </h2>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              value={word}
              onChange={handleChange}
            ></input>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return (
      <section className="pb-5">
        <h2 className="text-center">Which word do you want to learn today?</h2>
        <form className="text-center" onSubmit={handleSubmit}>
          <input type="search" onChange={handleChange}></input>
        </form>
      </section>
    );
  }
}
