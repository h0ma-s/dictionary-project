import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setLoaded(true);
    console.log(response);
    setResults(response.data);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
        <section>
          <h2 className="text-center">What word do you want to learn?</h2>
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
      </div>
    );
  } else {
    search();
    return (
      <section>
        <h2 className="text-center">What word do you want to learn?</h2>
        <form className="text-center" onSubmit={handleSubmit}>
          <input type="search" onChange={handleChange}></input>
        </form>
      </section>
    );
  }
}
