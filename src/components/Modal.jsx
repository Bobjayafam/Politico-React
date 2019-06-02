/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './modal.css';

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none' }}>
    <div className="overlay" onClick={closeCallback} />
    <div className="modal_content">
      {children}
      <button type="button" title="Close" className="close_modal" onClick={closeCallback}>
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
};

Modal.defaultProps = {
  children: <div>Empty Modal</div>,
  customClass: '',
  show: false,
  closeCallback: () => false
};

export default Modal;
