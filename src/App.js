import React from 'react';
import Note from "./Note";
import ImageButton from "./ImageButton";
import NoteEditorRef from "./NoteEditor";

function NoteList(props) {
    return (<div id={"NoteList"}>
            {
                props.notes.map(
                (note) =>
                    <Note key={note.noteId} noteId={note.noteId} title={note.title}
                          content={note.content} handleDelete={props.onDeleteNote} handleEdit={props.onEditNote}/>)
            }
        </div>
    );
}

function Footer(_){
    return (
        <div id="footer">
            All icons made by
            <a href="https://www.flaticon.com/authors/google" title="Google">Google</a>
             from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> <br/>
            Copyright &copy Maciej Izdebski. All rights reserved.
        </div>
    );
}

class App extends React.Component{

    atomicInteger = 2;
    constructor(props) {
        super(props);
        this.state = {
            notes : [
                this.createNote()
            ]
        };
        this.addNewNote = this.addNewNote.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }


    createNote(title="", content=""){
        this.atomicInteger++
        return {
            noteId: this.atomicInteger,
            title: title,
            content: content
        }
    }

    delete(note){
        let noteIndex = this.state.notes.findIndex(
            (n)=> n.noteId === note.noteId);
        this.setState(
            function (state,_) {
                state.notes.splice(noteIndex, 1);
                return {
                    notes : state.notes
                }
            }
        );
    }

    edit(note){
        NoteEditorRef.current.editNote(note);
    }

    addNewNote(){
        let newNote = this.createNote();
        this.setState(
            function (state,_) {
            state.notes.push(newNote);
            return {
                notes : state.notes
            }
        });
    }

    render() {
        return (
            <React.StrictMode>
                <NoteList notes={this.state.notes} onDeleteNote={this.delete} onEditNote={this.edit}/>
                <ImageButton id={"add-new-note"} onClick={this.addNewNote}
                             imageSrc={"icons/005-plus.svg"} altText={"Dodaj notatki"}/>
                <Footer/>
            </React.StrictMode>
        );
    }

}

export default App;