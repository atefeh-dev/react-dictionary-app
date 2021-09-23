/** @format */

import React, { useState, useEffect } from "react";
import Meaning from "../Components/Meaning";
import Phonetic from "../Components/Phonetics";
import PexelsApi from "../Apis/PexelsApi";

const Result = ({ data }) => {
  const [images, setImages] = useState(null);

  const searchWord = async () => {
    await PexelsApi.get("/search", {
      params: {
        query: data.word,
      },
    }).then((res) => {
      setImages(res.data.photos);
    });
  };
  if (data) {
    searchWord();

    return (
      <div className="container">
        <section id="block">
          <div className="row" id="sex">
            <div className="col-2 my-auto">
              {" "}
              <h2 id="block">{data.word} </h2>
            </div>
            <div className="col-4 my-auto" id="detail">
              {" "}
              {data.phonetics.slice(0, 1).map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          {data.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <section className="container" key={index}>
                  <Meaning meaning={meaning} images={images} />
                </section>
              </div>
            );
          })}{" "}
        </section>
      </div>
    );
  } else {
    return null;
  }
};
export default Result;
