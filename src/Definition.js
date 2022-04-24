import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition">
      {props.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
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
  );
}
