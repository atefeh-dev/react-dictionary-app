/** @format */

import React from "react";
import "../Style/Synonym.css";
const Synonyms = ({ synonym }) => {
  console.log(synonym);
  const renderList = synonym.slice(0, 6).map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  console.log(renderList.length);
  if (renderList.length !== 0)
    return (
      <ul className="synonym">
        {" "}
        <span className="syn">See synonym:</span> {renderList}
      </ul>
    );
  else return null;
};
export default Synonyms;
