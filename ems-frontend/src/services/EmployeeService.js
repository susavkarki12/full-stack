import axios from 'axios'

const GET_REST_API_URL= 'http://localhost:8080/api/posts/get';
const CREATE_REST_API_URL= 'http://localhost:8080/api/posts';

export const listPost= () => axios.get(GET_REST_API_URL)
export const createPost= (post)=> axios.post(CREATE_REST_API_URL, post)