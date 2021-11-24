import React, { useEffect, useState } from 'react';

const Stream = ({stream}) => {
    console.log('I render: ', );
    return <li className='stream'>
        <h3>{stream.title}</h3>
    </li>
}

export default Stream;