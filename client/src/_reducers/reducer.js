/* eslint-disable no-unreachable */
import {
    POST_CONTENT,
    AUTH_POST
}from '../_actions/types';

    
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action){
    console.log('reducer 시작');
    switch(action.type){
        case POST_CONTENT:
            return {...state, postSuccess: action.payload};
            break;

        case AUTH_POST:
            return {...state, savePost : action.payload};
            break;

        default:
            return state;
    }
}