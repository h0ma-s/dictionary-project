import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response);
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
    </div>
  );
}
