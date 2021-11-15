import data from "./data";
import { v4 as uuidv4 } from 'uuid';

const mainAdapter = {
    getAll: async () => {
        return JSON.parse(localStorage.getItem('mockDb'));
    },
    createPhase: async (title) => {
        const { phases } = JSON.parse(localStorage.getItem('mockDb'));
        const newPhase = {
            id: uuidv4(),
            title,
            position: phases.length,
            streams: [],
        }
        const newPhases = {phases: [...phases, newPhase]};
        localStorage.setItem('mockDb', JSON.stringify(newPhases));
        return newPhase;
    },
    deletePhase: async (id) => {
        const { phases } = JSON.parse(localStorage.getItem('mockDb'));
        const newPhases = phases.filter(phase => phase.id !== id);
        localStorage.setItem('mockDb', JSON.stringify({phases: newPhases}));
    },
    createStream: async (title, phaseId) => {
        const { phases } = JSON.parse(localStorage.getItem('mockDb'));
        const [phase] = phases.filter(phase => phase.id === phaseId);
        const newStream = {
            id: uuidv4(),
            title,
            position: phase.streams.length,
            phaseId,
        }
        phase.streams.push(newStream)
        localStorage.setItem('mockDb', JSON.stringify({phases}));
        return newStream;
    },
}

export default mainAdapter;