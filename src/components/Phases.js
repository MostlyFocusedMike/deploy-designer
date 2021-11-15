import React, { useEffect, useState, useCallback } from 'react';
import mainAdapter from '../adapters/main';
import Phase from './Phase';

const Phases = () => {
    const [phases, setPhases] = useState(null);
    const [phaseTitle, setPhaseTitle] = useState('')
    useEffect(() => {
        mainAdapter.getAll().then(data => setPhases(data.phases))
    }, []);

    const handleNewPhase = async (e) => {
        e.preventDefault();
        const newPhase = await mainAdapter.createPhase(phaseTitle);
        setPhases((phases) => [...phases, newPhase]);
        setPhaseTitle('');
    }
    // https://dmitripavlutin.com/dont-overuse-react-usecallback/
    const handleDeletePhase = useCallback(async (e) => {
        e.preventDefault();
        const deletedPhaseId = e.target.dataset.id
        await mainAdapter.deletePhase(deletedPhaseId);
        setPhases((phases) => phases.filter(phase => phase.id !== deletedPhaseId));
    }, [])

    const handleChange = (e) => {
        setPhaseTitle(e.target.value);
    }

return <div>
        <ol>
        {
            phases && phases.map(phase => {
                return <Phase phase={phase} key={phase.id} handleDeletePhase={handleDeletePhase}/>
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
