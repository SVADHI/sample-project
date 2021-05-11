import React from "react";
import "./Modal.css";
const Modal = ({ show, hidemodal, onClickYes }) => {
  console.log(`%c${show}`, "color:green");

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="container">
        <div id="myModal" className="bootstrap-modal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={hidemodal}
                >
                  &times;
                </button>
                <h4 className="modal-title pull-left">Create Canvas </h4>
              </div>
              <div className="modal-body">
                <p>Are you sure ? you want to create a canvas .</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary pull-left"
                  data-dismiss="modal"
                  onClick={onClickYes}
                >
                  YES
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={hidemodal}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
