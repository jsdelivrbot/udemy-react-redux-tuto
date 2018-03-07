import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST_DETAIL = 'fetch_post_detail';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "plv123";


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values)
        .then( () => callback() )
    ;

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPostDetail(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST_DETAIL,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
        .then( () => callback() )
    ;

    return {
        type: DELETE_POST,
        payload: id
    };
}
