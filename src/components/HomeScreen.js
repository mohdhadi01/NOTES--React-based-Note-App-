import React, { useState } from "react";
import NoteCard from "./NoteCard";
import "./HomeScreen.css";
import search from "../assets/search.png";
import CreateNote from "./CreateNote";

function HomeScreen(e) {
  const [parentText, setParentText] = useState([]);

  // function searchValue(event){
  //  const searchvalue=event.target.value
  // }


  let searchTerm = "";
  let tit = "";
  // console.log(parentText)
  function searchtext(e) {
    // console.log(parentText)
    console.log(parentText)
    // get input fieled value and change it to lower case
    // searchTerm = e.target.value.toLowerCase();

    // parentText.forEach((title) => {
    //   // navigate to p in the title, get its value and change it to lower case
    //   tit = title.textContent.toLowerCase();
    //   // it search term not in the title's title hide the title. otherwise, show it.
    //   tit.includes(searchTerm)
    //     ? (title.style.display = "block")
    //     : (title.style.display = "none");
    // });
  }

  return (
    <section>
      <div className="MainContainer">
        <h1>NOTES</h1>
        <img className="search" src={search} alt="" />
        <input
          type="text"
          className="searchbar"
          placeholder="Type to Seach..."
          onChange={searchtext}
        />

        <div className="cardSection">
          <CreateNote myvalue={(notes) => setParentText(notes)} />
          <>
            {parentText.map((myinput, i) => {
              return <NoteCard passvalue={myinput} />;
            })}
          </>
          {/* <NoteCard />
          <NoteCard />
          <NoteCard /> */}
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
