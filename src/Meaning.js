import React from "react";

export default function Meaning(props) {
  return (
    <section>
      {props.result.meanings.map(function (meaning, index) {
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
  );
}
