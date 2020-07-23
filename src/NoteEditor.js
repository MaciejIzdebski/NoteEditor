import React from 'react';
import './NoteEditor.css';
import ReactDOM from 'react-dom'

class NoteEditor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
        this.setVisibility = this.setVisibility.bind(this);
    }

    render() {
        if(!this.state.visible) {
            return null;
        }

        return (
            <div id="GreyCanvas">
              <div id="NoteEditor">
                  <input id="NoteEditorHeader">
                      {this.state.title}
                  </input>
                  <input id="NoteEditorContent">
                      {this.state.content}
                  </input>
                  <div id="NoteEditorFooter">
                      <button id="OkButton">
                          <img src={"icons/001-tick.svg"} alt="Ok"/>
                      </button>
                      <button id="CancelButton">
                          <img src={"icons/004-close.svg"} alt="Anuluj"/>
                      </button>
                  </div>
              </div>
            </div>
        );
    }

    setVisibility(visibility){
        this.setState({
            visible: visibility
        })
    }

    editNote(note){
        this.setVisibility(true)
    }

    createNewNote(){
        this.setVisibility(true)
    }

    closeEditor(){
        this.setVisibility(false)
    }

    applyChanges(){
        this.setVisibility(false)
    }
}

let noteEditor = ReactDOM.render(
    <NoteEditor/>,
    document.getElementById("NoteEditorContainer")
)

export default noteEditor;