import { fromJS } from 'immutable';
import  * as actionTypes  from './actionTypes'
const defaultState = fromJS ({
    recommendList:[],
    articleList:[],
    RightList:[],
    page:1,
    scroolTop:false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_DATA:
            return state.merge({
                recommendList:action.recommendList,
                articleList:action.articleList,
                RightList:action.RightList

            })
        case actionTypes.GET_MORE_DATA:
            return state.merge({
                'articleList':state.get('articleList').concat(action.data),
                'page':action.nextpage
            })
        case actionTypes.SRCOOL_TO_TOP:
            return state.set('scroolTop',action.show)
        default:
            return state;
    }
}