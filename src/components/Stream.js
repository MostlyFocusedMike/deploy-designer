import React, { useEffect, useState } from 'react';

const Stream = ({stream}) => {
    return <li class='stream'>
        <h3>{stream.title}</h3>
    </li>
}

export default Stream;