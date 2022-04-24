import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section>
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-3" key={index}>
                <img
                  src={photo.src.medium}
                  className="img-fluid rounded"
                  alt={photo.alt}
                />
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
