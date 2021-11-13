import React, { useEffect, useState } from 'react';
import Stream from './Stream';

const Streams = ({streams}) => {
    return <ol id='streams'>
        {
            streams && streams.map(stream => {
                return <Stream stream={stream} key={stream.id} />
            })
        }
    </ol>
}

export default Streams;
