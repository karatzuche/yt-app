import axios from 'axios'

const KEY = 'AIzaSyDRBU4qRcq1ply73sxJCq3xSIqOWpj4AYk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})