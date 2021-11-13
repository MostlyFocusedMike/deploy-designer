import React, { useEffect, useState } from 'react';
import mainAdapter from '../adapters/main';
import Phase from './Phase';

const Phases = () => {
    const [phases, setPhases] = useState(null);
    useEffect(() => {
        const doIt = async () => {
            const data = await mainAdapter.getAll()
            setPhases(data.phases)
        }

        doIt();
    }, [])
    console.log('phases: ', phases);
    return <div>
        <ol>
        {
            phases && phases.map(phase => {
                return <Phase phase={phase} key={phase.id} />
            })
        }
        </ol>
    </div>
}

export default Phases;
