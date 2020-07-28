import axios from 'axios';

const KEY = 'AIzaSyCHcIOFJPP6doUK36VmvgRoQ_pgdefaGxk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});