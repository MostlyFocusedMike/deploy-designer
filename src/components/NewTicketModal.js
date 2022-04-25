import React, { useState, useEffect, useRef } from "react";

const isTabKey = (e) => (e.which || e.keyCode) === 9;
const isShiftKey = (e) => (e.which || e.keyCode) === 16;

const NewTicketModal = ({ toggleVisibility}) => {
  const [isShiftDown, setIsShiftDown] = useState(false);
  const xButton = useRef();
  const submitButton = useRef();

  useEffect(() => { xButton.current.focus() }, []);

  const setShiftKey = (e) => isShiftKey(e) && setIsShiftDown(e.type === 'keydown');

  const firstTrapFocus = (e) => {
    if (!isTabKey(e) || !isShiftDown) return;
    e.preventDefault();
    submitButton.current.focus();
  }

  const lastTrapFocus = (e) => {
    if (!isTabKey(e) || isShiftDown) return;
    e.preventDefault();
    xButton.current.focus();
  }

  const handleBackdropClick = (e) => (e.target.id === 'modal-backdrop') && toggleVisibility();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit!:', );
  }

  return <div id='modal-backdrop' onClick={handleBackdropClick}>
    <div id='new-ticket-modal' onKeyUp={setShiftKey} onKeyDown={setShiftKey}>
      <button onKeyDown={firstTrapFocus} onClick={toggleVisibility} ref={xButton}>X</button>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Ticket Title</label>
        <input type='text' id='title' />
        <label htmlFor='description'>Ticket Description</label>
        <input type='text' id='description'/>

        <button onKeyDown={lastTrapFocus} ref={submitButton}>Create Ticket</button>
      </form>
    </div>
  </div>
}

export default NewTicketModal;
