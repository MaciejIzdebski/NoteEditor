import React from "react";

function ImageButton(props) {
    return (
        <button id={props.id} className={props.className} onClick={props.onClick}>
            <img src={props.imageSrc} alt={props.altText} />
        </button>
    );
}

ImageButton.defaultProps = {
    className: null,
    id: null
};

export default ImageButton;