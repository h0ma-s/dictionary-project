import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index} className="phonetic">
            <span className="text">{phonetic.text}</span>
            <a
              href={phonetic.audio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn audio"
            >
              Listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
