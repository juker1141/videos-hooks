import axios from "axios";

const KEY = 'AIzaSyD97qopB1OL8IV142ow1O6nDSS6g_ef6aE';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});