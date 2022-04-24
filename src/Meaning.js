import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.result.meanings.map(function (meaning, index) {
        return (
          <section>
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <div>
                {meaning.definitions.map(function (definition, index) {
                  return (
                    <div>
                      <div key={index}>
                        <span className="number"> {index + 1}</span>
                        {definition.definition}
                      </div>
                      <div className="example">
                        <em>{definition.example}</em>
                      </div>
                      <Synonyms synonyms={definition.synonyms} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
