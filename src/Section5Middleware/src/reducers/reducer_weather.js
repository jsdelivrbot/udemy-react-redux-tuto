import { FETCH_WEATHER } from '../actions/index';

export default function (state=[], action)
{
    switch (action.type) {
        case FETCH_WEATHER:
            // warning : don't use push that mutates the state
            // we have to returns a new array
            // **NO ! mutates the state ** return state.push( action.payload.data); // NO !!!
            //return state.concat( [action.payload.data] ); // OK
            return [ action.payload.data, ...state ]; // OK too with ES6

    }
    // console.log('action received', action);
    return state;
}
