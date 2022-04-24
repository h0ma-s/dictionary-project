import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <section>
                <h3>
                  {result.word}
                  <span className="index">{index + 1}</span>
                </h3>
                <Phonetics phonetics={result.phonetics} />
              </section>
              <Meaning result={result} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
