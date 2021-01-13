import axios from "axios";

class Server {
  constructor() {
    this.server = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/'
    });
  }

  randomKeyGenerator() {
    const keys = [
      "AIzaSyANXRHsWkfDK4AobMFTEo04mV64PRzx9ac",
      "AIzaSyBUFveT9bF7MQq8and-GF0y-Q3Elr14_go",
      "AIzaSyBSIrFBqvtVgl_SfdCwIeKKthqrnoryCt8",
      "AIzaSyDu9AVrfjPXIiQ5EOIOjHfAqhQ3BX6U_V8",
      "AIzaSyCtGv0wKSVLEcaus1hYLr022MfYRuGgONY"
    ];
    const randomIndex = Math.floor(Math.random()*5);
    const API_KEY = keys[randomIndex];
    return API_KEY;
  }

  async searchVideos(query) {  
    const response = await this.server.get('search', {
      params : {
        part: 'snippet',
        maxResults: 18,
        type: 'video',
        q: query,
        key: this.randomKeyGenerator(),
      }
    });
    const items = await response.data.items;
    const result = await items.map(item => ({ ...item, id:item.id.videoId}));
    return result;
  } 
  
  async getPopularVideos() { 
    const response = await this.server.get('videos', {
      params : {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 18,
        key: this.randomKeyGenerator(),
      }
    });
    const items = await response.data.items;
    return items;
  }
}

export default Server;

// When Not Using AXIOS Library

// class Server {
//   keys = [
//     "AIzaSyANXRHsWkfDK4AobMFTEo04mV64PRzx9ac",
//     "AIzaSyBUFveT9bF7MQq8and-GF0y-Q3Elr14_go",
//     "AIzaSyBSIrFBqvtVgl_SfdCwIeKKthqrnoryCt8",
//     "AIzaSyDu9AVrfjPXIiQ5EOIOjHfAqhQ3BX6U_V8",
//     "AIzaSyCtGv0wKSVLEcaus1hYLr022MfYRuGgONY"
//   ];
//   requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   async searchVideos(query) {
//     const randomIndex = Math.floor(Math.random()*5);
//     const API_KEY = this.keys[randomIndex];    
//     const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${API_KEY}`, this.requestOptions);
//     const json = await response.json();
//     const items = await json.items;
//     const result = await items.map(item => ({ ...item, id:item.id.videoId}));
//     return result;
//   }

//   async getPopularVideos() {
//     const randomIndex = Math.floor(Math.random()*5);
//     const API_KEY = this.keys[randomIndex];
//     const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`, this.requestOptions);
//     const result = await response.json();
//     return result.items;
//   }
// }

