import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Note";

function App() {
  return (
    <div>
      <Heading />
      <Footer />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default App;
