/** @format */

import React from "react";
import "../Style/Synonym.css";
const Synonyms = ({ synonym }) => {
  const renderList = synonym.slice(0, 4).map((item, index) => {
    return <li key={index}>{item}</li>;
  });

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
