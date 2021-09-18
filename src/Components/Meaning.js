/** @format */

import React from "react";
import "../Style/Meaning.css";
const Meaning = ({ meaning }) => {
  console.log(meaning);
  const renderList = meaning.definitions.map((definition, index) => {
    return (
      <div key={index}>
        <div className="row  gx-5 my-auto ">
          <div className="col-md-8 mt-2 mb-1" id="meaning">
            {definition.definition}
            <p className="w-80 mt-1">{definition.example}</p>
          </div>
          <div className="col-md-2 mt-2 " id="pos">
            {" "}
            {meaning.partOfSpeech}
          </div>
          <div className="col-md-2"> </div>
        </div>
      </div>
    );
  });

  return <div className="Meaning"> {renderList}</div>;
};

export default Meaning;
