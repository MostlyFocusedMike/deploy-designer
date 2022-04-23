import React, { useEffect, useState } from 'react';
import mainAdapter from '../adapters/main';
import Stream from './Stream';

const Streams = ({startingStreams, phaseId}) => {
  const [streams, setStreams] = useState(startingStreams);
  const [newStreamName, setNewStreamName] = useState('')
  const handleStreamName = (e) => {
    setNewStreamName(e.target.value);
  }

  const handleAddStream = async (e) => {
    e.preventDefault();
    const newStream = await mainAdapter.createStream(newStreamName, phaseId);
    setStreams(streams => [...streams, newStream])
    setNewStreamName('');
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
      <input onChange={handleStreamName} value={newStreamName} id='stream-title'/>
      <button onClick={handleAddStream}>Create Stream</button>
    </form>
  </div>
}

export default Streams;
