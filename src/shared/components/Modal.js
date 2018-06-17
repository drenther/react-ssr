import React from 'react';

const Modal = ({ open, closeModal }) => (
  <div className={`modal${open ? ' active' : ''}`}>
    <a href="#" className="modal-overlay" aria-label="Close" />
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title h5 text-primary">Upcoming movies...</div>
      </div>
      <div className="modal-body">
        <div className="content">
          <ul>
            <li className="h6">Jurassic World: Fallen Kingdom</li>
            <li className="h6">Incredible 2</li>
          </ul>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
