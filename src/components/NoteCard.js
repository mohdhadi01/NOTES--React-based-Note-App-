import React, { useState } from "react";
import "../components/NoteCard.css";
import bin from "../assets/bin.png";

function NoteCard(props) {
  const [originValue, setOriginValue] = useState(props.passvalue);

  const handleInputChange = (event) => {
    setOriginValue(event.target.value);
  };

  const deleteNotes = () => {
    document.querySelector(".Note").remove();
  };
  let date = new Date();
  return (
    <>
      <div className="Note">
        <textarea
          className="regularInput"
          name=""
          id=""
          cols="30"
          value={originValue}
          onChange={handleInputChange}
          rows="10"
        ></textarea>
        <div className="bottomSection">
          <h4>{date.toLocaleDateString()}</h4>
          <img src={bin} className="bin" alt="" onClick={deleteNotes} />
        </div>
      </div>
    </>
  );
}

export default NoteCard;
