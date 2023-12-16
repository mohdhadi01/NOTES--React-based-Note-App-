import React, { useState } from "react";
import NoteCard from "./NoteCard";
import "./HomeScreen.css";
import search from "../assets/search.png";
import CreateNote from "./CreateNote";

function HomeScreen(e) {
  const [parentText, setParentText] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  return (
    <section>
      <div className="MainContainer">
        <h1>NOTES</h1>
        <img className="search" src={search} alt="" />
        <input
          type="text"
          className="searchbar"
          placeholder="Type to Seach..."
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />


        <div className="cardSection">
          <CreateNote myvalue={(notes) => setParentText(notes)} />
          <>
            {parentText.map((myinput, i) => {
              const isString = typeof myinput === 'string';
              const isMatching = isString && myinput.toLowerCase().includes(searchInput);
              // const isMatching= myinput.toLowerCase().includes(searchInput);
              return  isMatching || searchInput===""?  (
                <NoteCard
                  passvalue={myinput}
                  key={i}
                />
              ):null;
            })}
          </>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
