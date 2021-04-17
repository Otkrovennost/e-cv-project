import React from "react";
import "./Modal.scss";
import { motion } from "framer-motion";

function Modal({ children, open, setIsOpened, setCvData, cvData }) {
  if (!open) return null;
  return (
    <>
      <div className="modal-overlay">
        <motion.div className="modal">
          <div className="modal__inner">
            <button
              className="modal__exit-btn"
              onClick={() => setIsOpened(false)}
            >
              <i className="far fa-times-circle"></i>
            </button>
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
