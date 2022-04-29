import React, { useEffect, useState } from 'react';
import Tickets from './Tickets';

const Stream = ({stream}) => {
  return <li className='stream'>
    <h3>{stream.title}</h3>
    { stream.tickets && <Tickets initTickets={stream.tickets} streamId={stream.id}/> }
  </li>
}

export default Stream;