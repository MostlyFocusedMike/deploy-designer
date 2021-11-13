import React, { useEffect, useState } from 'react';
import Streams from './Streams';

const Phase = ({phase}) => {
    console.log('I render: ');
    return <li className='phase'>
        <h2>{phase.title}</h2>
        <Streams streams={phase.streams} />
    </li>
}

export default React.memo(Phase);
