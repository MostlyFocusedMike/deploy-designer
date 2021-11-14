import data from "./data";
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4()); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
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
        console.log('newPhases: ', newPhases);
        localStorage.setItem('mockDb', JSON.stringify({phases: newPhases}));
    }
}

export default mainAdapter;