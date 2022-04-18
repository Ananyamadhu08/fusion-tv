import React from "react";

const Modal = ({ showModal, modalBody, setShowModal, modalTitle }) => {
  return (
    <div
      style={{ display: `${showModal ? "block" : "none"}`, zIndex: "30" }}
      className="modal"
    >
      <div className="modal-cont bg-white">
        <span
          onClick={() => setShowModal(false)}
          class="modal-close-btn close-btn text-slate-700 text-hover-white fas fa-times"
        ></span>
        <h2>{modalTitle}</h2>

        <div className="modal-body p-5"> {modalBody} </div>
      </div>
    </div>
  );
};

export default Modal;
