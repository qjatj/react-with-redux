import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2a5be0358186ca8bd442e764498d0bde007c85564a3725dc2911dfe502f5874c'
    }
});