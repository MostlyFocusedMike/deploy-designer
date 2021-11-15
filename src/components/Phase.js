import React, { useEffect, useState } from 'react';
import Streams from './Streams';

const Phase = ({phase, handleDeletePhase}) => {
    return <li className='phase'>
        <h2>{phase.title}</h2>
        <form>
            <button onClick={handleDeletePhase} data-id={phase.id}>Delete</button>
        </form>
        <Streams startingStreams={phase.streams} phaseId={phase.id} />
    </li>
}

// https://dmitripavlutin.com/use-react-memo-wisely/
export default React.memo(Phase);
