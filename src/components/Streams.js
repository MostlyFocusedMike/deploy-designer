import React, { useEffect, useState } from 'react';
import mainAdapter from '../adapters/main';
import Stream from './Stream';

const Streams = ({startingStreams, phaseId}) => {
    const [streams, setStreams] = useState(startingStreams);

    const handleAddStream = async (e) => {
        e.preventDefault();
        console.log('phaseId: ', phaseId);
        const newStream = await mainAdapter.createStream('test', phaseId);
        setStreams(streams => [...streams, newStream])
    }

    return <div id='streams-container'>
        <ol id='streams'>
        {
            streams && streams.map(stream => {
                return <Stream stream={stream} key={stream.id} />
            })
        }
        </ol>
        <form>
            <label htmlFor='stream-title'>Stream Title</label>
            <input id='stream-title'/>
            <button onClick={handleAddStream}>Create Stream</button>
        </form>
    </div>
}

export default Streams;
