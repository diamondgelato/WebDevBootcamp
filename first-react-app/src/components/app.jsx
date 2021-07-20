import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const React = require("react");

function createNote (note) {
    return <Note
        key = {note.id}
        title = {note.title}
        content = {note.content}
    />;
}

function App() {
    return <div>
        <Header/>
        {notes.map(createNote)}
        <Footer/>
    </div>
}

export default App;