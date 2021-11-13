import React, { useEffect, useState } from 'react';
import mainAdapter from '../adapters/main';
import Phase from './Phase';

const Phases = () => {
    const [phases, setPhases] = useState(null);
    const [phaseTitle, setPhaseTitle] = useState('')
    useEffect(() => {
        const doIt = async () => {
            const data = await mainAdapter.getAll()
            setPhases(data.phases)
        }

        doIt();
    }, [])

    const handleNewPhase = async (e) => {
        e.preventDefault();
        const newPhase = await mainAdapter.createPhase(phaseTitle);
        setPhases((phases) => [...phases, newPhase]);
        setPhaseTitle('');
    }
    const handleChange = (e) => {
        setPhaseTitle(e.target.value);
    }
    console.log('phases: ', phases);
    return <div>
        <ol>
        {
            phases && phases.map(phase => {
                return <Phase phase={phase} key={phase.id} />
            })
        }
        </ol>
        <form>
            <label htmlFor='phase-title'>Phase Title</label>
            <input id='phase-title' onChange={handleChange} value={phaseTitle}/>
            <button onClick={handleNewPhase}>Add Phase</button>
        </form>
    </div>
}

export default Phases;
