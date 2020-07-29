import React from 'react';
import './Note.css';
import ImageButton from "./ImageButton";

class Note extends React.Component{
    noteId;

    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            content : props.content
        };
        this.noteId = this.props.noteId;

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange(title){
        this.setState({
            title: title
        });
    }

    handleContentChange(content){
        this.setState({
            content: content
        })
    }

    onEdit(){
        this.props.handleEdit(this);
    }

    onDelete(){
        this.props.handleDelete(this);
    }

    render() {
    return (
      <div className="Note">
          <pre className="NoteHeader" placeholder={"<Bez tytułu>"}>
              {this.state.title}
          </pre>
          <pre className="NoteContent" placeholder={"<Brak zawartości>"}>
              {this.state.content}
          </pre>
          <div className="NoteFooter">
              <ImageButton className="NoteEditButton" onClick={this.onEdit}
                           imageSrc={"icons/003-edit.svg"} alt="Modifikuj"/>
              <ImageButton className="NoteDeleteButton" onClick={this.onDelete}
                      imageSrc={"icons/004-trash.svg"} altText="Usuń"/>
          </div>
      </div>
    );
  }
}

export default Note;
