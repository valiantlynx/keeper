import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [click, setClick] = useState([]);

  function handleClick(note) {
    setClick((preValue) => {
      return [...preValue, note];
    });
    console.log(click);
  }

  function deleteNote(id) {
    console.log("Delete was triggered");
    setClick((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea onAdd={handleClick} />

      {click.map((note, index) => (
        <Note
          onDelete={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
