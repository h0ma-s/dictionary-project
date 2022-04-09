import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleChange}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
