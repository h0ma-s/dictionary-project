import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <h3>
                {index + 1}. {result.word}
              </h3>
              <h4>{result.phonetic}</h4>
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
