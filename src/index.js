import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './Note';
import * as serviceWorker from './serviceWorker';
import noteEditor from 'NoteEditor'


function AddNewNoteButton(props) {
    return (
        <button id="add-new-note" onClick={() => noteEditor.setVisablilty()}>
            <img src={"icons/005-plus.svg"} alt="Dodaj notatke..."/>
        </button>
    )
}

var notes = ReactDOM.render(
    <React.StrictMode>
        <Note title="Tytuł" content="Testowa zawartość notatki" />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
