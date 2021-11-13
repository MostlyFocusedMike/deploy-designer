import data from "./data";
const mainAdapter = {
    getAll: async () => {
        return Promise.resolve(data);
    }
}

export default mainAdapter;