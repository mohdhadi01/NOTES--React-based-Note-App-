import React, { useState } from "react";
import "../components/CreateNote.css";
// import NoteCard from "./NoteCard";

function CreateNote(props) {
  const [Input, setInput] = useState([]);
  let [curinput, setCurInput] = useState([]);

  function addText(event) {
    curinput = event.target.value;
    setCurInput(curinput);
  } 
  function updateText() {
    const newNotes = [...Input, curinput];
    setInput(newNotes);
    props.myvalue(newNotes);
    setCurInput("");
  }
  return (
    <>
      <div className="CreateNote">
        <textarea
          className="CreateInput"
          onChange={addText}
          value={curinput}
          name=""
          id="" 
          cols="30"
          rows="10"
          placeholder="Type to add a Note..."
        ></textarea>

        <div className="belowSection">
          <h4>Create New Notes</h4>
          <button onClick={updateText} className="saveButton">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
