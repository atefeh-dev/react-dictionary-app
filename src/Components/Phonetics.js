/** @format */

import React from "react";
import useSound from "use-sound";

const Phonetics = ({ phonetic }) => {
  console.log(phonetic);
  const [play] = useSound(phonetic.audio);

  return (
    <div>
      <span className="sound-text ">{phonetic.text}</span>{" "}
      <button onClick={play} id="sb">
        {" "}
        <i className="fas fa-volume-up fa-2x" id="vol"></i>
      </button>
    </div>
  );
};
export default Phonetics;
