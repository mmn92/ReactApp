import React from "react";

export const Modal = props => {
  let className = "modal__card";

  if (props.isOpen) className += " modal__card--open";
  else className += " modal__card--closed";

  return (
    <div className={className}>
      <div className="modal__wrapper">
        <div className="modal__data">{props.children}</div>
        <button onClick={props.handleClose}> X </button>
      </div>
    </div>
  );
};
