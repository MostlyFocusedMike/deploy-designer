import React, { useContext, useEffect } from "react";

const NewTicketModal = ({ handleToggle}) => {
  return <div id='modal-backdrop' onClick={handleToggle}>
    <div id='new-ticket-modal'>
      <button onClick={handleToggle}>X</button>
      <h2>Create New Ticket</h2>
      <form>
        <input type='text'/>
      </form>
    </div>
  </div>

}

export default NewTicketModal;
