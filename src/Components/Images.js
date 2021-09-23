/** @format */

import React from "react";
import "../Style/photos.css";
const Images = ({ images }) => {
  if (images) {
    console.log(images);
    return (
      <section className="Photos" id="block">
        <div className="row">
          {images.slice(0, 3).map(function (images, index) {
            return (
              <div className="col-4" key={index}>
                <a href={images.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={images.src.landscape}
                    className="img-fluid"
                    alt={images.src.photographer}
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
};
export default Images;
