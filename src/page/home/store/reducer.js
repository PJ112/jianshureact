import { fromJS } from 'immutable';
import  * as actionTypes  from './actionTypes'
const defaultState = fromJS ({
    recommendList:[],
    articleList:[],
    RightList:[]
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_DATA:
            return state.merge({
                recommendList:action.recommendList,
                articleList:action.articleList,
                RightList:action.RightList

            })
        default:
            return state;
    }
}