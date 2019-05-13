import {CHANGE_TAB} from '../constants/actionTypes';

export default function nav(state = 0, action) {
    switch(action.type) {
        case CHANGE_TAB:
            return {...state, selectedTabIndex: action.index};
        default:
            return state;
    }
} 