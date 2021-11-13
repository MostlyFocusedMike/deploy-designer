import React, { useEffect, useState } from 'react';
import Streams from './Streams';

const Phase = ({phase}) => {
    return <li class='phase'>
        <h2>{phase.title}</h2>
        <Streams streams={phase.streams} />
    </li>
}

export default Phase;
