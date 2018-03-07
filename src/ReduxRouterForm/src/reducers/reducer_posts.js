import { FETCH_POSTS} from "../actions";
import { FETCH_POST_DETAIL } from "../actions";
import { DELETE_POST } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case DELETE_POST:
            console.log("delete post");
            console.log(action);
            return _.omit(state, action.payload);
        case FETCH_POST_DETAIL:
            /*
            const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            return newState;
            */
            return {...state, [action.payload.data.id]: action.payload.data}
        default:
            return state;
    }
}
