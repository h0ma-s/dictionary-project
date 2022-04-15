import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <span>{phonetic.text}</span>
            <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
              Listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
