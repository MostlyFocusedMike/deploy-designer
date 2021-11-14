import React, { useEffect, useState } from 'react';
import Streams from './Streams';

const Phase = ({phase, handleDeletePhase}) => {
    console.log('I render: ');
    return <li className='phase'>
        <h2>{phase.title}</h2>
        <Streams streams={phase.streams} />
        <form>
            <button onClick={handleDeletePhase} data-id={phase.id}>Delete</button>
        </form>
    </li>
}

// https://dmitripavlutin.com/use-react-memo-wisely/
export default React.memo(Phase);
