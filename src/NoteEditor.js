import React from 'react';
import './NoteEditor.css';
import ImageButton from "./ImageButton";
import ReactDOM from "react-dom"

function Overlay(props){
    return (<div id="Overlay">{props.children}</div>);
}

function NoteEditorFooter(props) {
    return (
        <div id="NoteEditorFooter">
            <ImageButton id="OkButton" onClick={props.applyChanges}
                imageSrc={"icons/001-tick.svg"} altText={"Ok"}/>
            <span style={{backgroundColor: "black", width:"1px"}}/>
            <ImageButton id="CancelButton" onClick={props.discardChanges}
                 imageSrc={"icons/002-close.svg"} altText="Anuluj"/>
        </div>
    );
}

class NoteEditor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible : true,
            noteTitle : "",
            noteContent : ""
        }
        this.discardChanges = this.discardChanges.bind(this);
        this.applyChanges = this.applyChanges.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    handleTitleChange(event){
        this.state.onTitleChange(event.target.value);
        this.setState({
            noteTitle: event.target.value
        })
    }

    handleContentChange(event){
        this.state.onContentChange(event.target.value);
        this.setState({
            noteContent: event.target.value
        })
    }


    render() {
        if(!this.state.visible)
            return null;

        return (
            <Overlay>
              <div id="NoteEditor">
                  <textarea id="NoteEditorHeader" value={this.state.noteTitle}
                            placeholder={"<Tytuł>"} onChange={this.handleTitleChange} />
                  <textarea id="NoteEditorContent" value={this.state.noteContent}
                            placeholder={"<Zawartość>"} onChange={this.handleContentChange}/>
                  <NoteEditorFooter discardChanges={this.discardChanges}
                                    applyChanges={this.applyChanges}/>
              </div>
            </Overlay>
        );
    }

    discardChanges(){
        this.state.onTitleChange(this.state.noteTitleCopy);
        this.state.onContentChange(this.state.noteContentCopy);
        this.closeEditor();
    }

    closeEditor(){
        this.setState({
            visible: false
        })
    }

    applyChanges() {
        this.closeEditor();
    }


    editNote(note){
        let title = note.state.title;
        let content = note.state.content;
        this.setState({
            visible: true,
            noteTitle: title,
            noteContent: content,
            noteTitleCopy: title,
            noteContentCopy: content,
            onContentChange: (value) => note.handleContentChange(value),
            onTitleChange: (value) => note.handleTitleChange(value)
        });
    }
}

const NoteEditorRef = React.createRef();

// noinspection JSCheckFunctionSignatures
ReactDOM.render(<NoteEditor ref={NoteEditorRef} />, document.getElementById("NoteEditorContainer"));

export default NoteEditorRef;