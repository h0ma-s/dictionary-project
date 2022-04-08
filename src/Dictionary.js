import React, { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(word);
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
