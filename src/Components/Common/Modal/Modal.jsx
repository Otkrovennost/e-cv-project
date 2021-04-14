import React from 'react';
import './Modal.scss';

function Modal({ children, open }) {
  if (!open) return null;
  return (
    <div>
      <button>Close</button>
      {children}
    </div>
  );
}

export default Modal;
