import React from "react";
import "./Meaning.css";
import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.result.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <div>
              <h4>{meaning.partOfSpeech}</h4>
              <div>
                <Definition definitions={meaning.definitions} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
