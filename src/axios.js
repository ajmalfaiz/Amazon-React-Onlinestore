import axios from "axios";


const instance = axios.create({
    baseURL: 'https://sleepy-dawn-34743.herokuapp.com/',
  });
  
export default instance;  