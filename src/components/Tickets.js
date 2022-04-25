import React, { useEffect, useState, useContext } from 'react';
import NewTicketModal from './NewTicketModal';

const Tickets = ({initTickets}) => {
  const [tickets, setTickets] = useState(initTickets);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

return <>
    <ol className='ticket'>
      {
        tickets.length && tickets.map(ticket => {
          return <li className='ticket' key={ticket.id}>
            <h4>{ticket.title}</h4>
            <p>{ticket.description}</p>
          </li>
        })
      }
    </ol>
    <button onClick={() => setIsVisible(!isVisible)}>Add new ticket</button>
    {
      isVisible && <NewTicketModal toggleVisibility={toggleVisibility} />
    }
  </>
}

export default Tickets;