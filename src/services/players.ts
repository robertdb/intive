import { API } from '../settings/setting';
const axios = require('axios');

export const fetchPlayers = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        let res = await axios.get(`${API}/players.json`, config);
        let data = await res.data;
        return data;
    } catch (e) {
        throw e;
    }
}