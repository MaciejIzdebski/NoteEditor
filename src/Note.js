import React from 'react';
import './Note.css';


class Note extends React.Component{
    noteId;

    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            content : props.content
        };

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this)
    }

    onEdit(){

    }
    onDelete(){

    }

    render() {
    return (
      <div className="Note">
          <div className="NoteHeader">
              {this.state.title}
          </div>
          <div className="NoteContent">
              {this.state.content}
          </div>
          <div className="NoteFooter">
              <button className="NoteEditButton">
                  <img src={"wrench.svg"} alt="Modifikuj"/>
              </button>
              <button className="NoteDeleteButton">
                  <img src={"delete.svg"} alt="Usuń"/>
              </button>
          </div>
      </div>
    );
  }
}

export default Note;
