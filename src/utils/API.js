import axios from 'axios';

const host = 'https://api.icndb.com/jokes/random/';

export default {
    getRandomQuotes: (num, firstName, lastName) => {
        if (num) {
            return axios.get(`${host}${num}?firstName=${firstName}&lastName=${lastName}`);
        }
        return axios.get(host);
    }
};