import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 mb-3" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid rounded"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
