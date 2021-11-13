import React, { useEffect, useState } from 'react';
import mainAdapter from './adapters/main';

const App = () => {
    const [val, setVal] = useState(null);
    useEffect(() => {
        const doIt = async () => {
            const data = await mainAdapter.getAll()
            console.log('data: ', data);
        }

        doIt();
    }, [])
    return <div><h1>Hello</h1></div>
}

export default App;
