import React from 'react';
import './Modal.scss';

function Modal({ children, open, setIsOpened }) {
  if (!open) return null;
  return (
    <>
      <div className='modal-overlay'>
        <div className='modal'>
          <button onClick={() => setIsOpened(false)}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
