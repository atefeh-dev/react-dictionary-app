/** @format */

import React from "react";
import "../Style/Meaning.css";
import Synonyms from "../Components/Synonyms";
const Meaning = ({ meaning, images }) => {
  console.log(images);
  const renderList = meaning.definitions.map((definition, index) => {
    return (
      <div key={index} className="sex">
        <div className="row  gx-5 my-auto ">
          <div className="col-md-10 mt-2 mb-1" id="meaning" key={index}>
            {definition.definition}
            <p className="w-80 mt-1">{definition.example}</p>
            <Synonyms synonym={definition.synonyms} />
          </div>
          <div className="col-md-2 mt-2 " id="pos">
            {" "}
            {meaning.partOfSpeech}
          </div>
        </div>
      </div>
    );
  });

  return <div className="Meaning"> {renderList}</div>;
};

export default Meaning;
