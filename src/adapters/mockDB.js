import data from './data';

export const createMockDB = () => {
    if (!localStorage.getItem('mockDb')) {
        localStorage.setItem('mockDb', JSON.stringify(data))
    }
}