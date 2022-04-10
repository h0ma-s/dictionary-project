import React from "react";

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
              <section>
                {result.meanings.map(function (meaning, index) {
                  return (
                    <div key={index}>
                      <h4>{meaning.partOfSpeech}</h4>
                      <div>
                        {meaning.definitions.map(function (definition, index) {
                          return (
                            <div key={index}>
                              <div>{definition.definition}</div>
                              <div>
                                <em>{definition.example}</em>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
