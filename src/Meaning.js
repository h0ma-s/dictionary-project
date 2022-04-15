import React from "react";
import Synonyms from "./Synonyms";

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
                    <Synonyms synonyms={definition.synonyms} />
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
