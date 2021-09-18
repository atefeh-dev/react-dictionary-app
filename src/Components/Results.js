/** @format */

import React from "react";
import Meaning from "../Components/Meaning";

const Result = ({ data }) => {
  if (data) {
    return (
      <section>
        {data.meanings.map((meaning, index) => {
          return (
            <section className="container" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}{" "}
      </section>
    );
  } else return null;
};
export default Result;
