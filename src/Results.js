import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map(function (result, index) {
          console.log(result);
          return (
            <div key={index}>
              <h3>
                {index + 1}. {result.word}
              </h3>
              <Phonetics phonetics={result.phonetics} />
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
