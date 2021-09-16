/** @format */

import React, { useState } from "react";
const Meaning = ({ data }) => {
  const [renderList, setRenderList] = useState(null);
  if (data) {
    console.log(data);
    setRenderList(
      data.meanings.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>

            <div className="example">{definition.example}</div>
          </div>
        );
      })
    );
  }

  if (data) {
    return <div className="Meaning"> {renderList}</div>;
  } else return null;
};
export default Meaning;
