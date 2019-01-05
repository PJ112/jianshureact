import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState =fromJS ({
     focus:false
    })
export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focus',true)
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focus',false)
    }
    return state;
}