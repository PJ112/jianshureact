import  * as actionTypes  from './actionTypes'
import axios from "axios";
import {fromJS} from 'immutable'
const getHomeData = (data) => ({
    type:actionTypes.GET_HOME_DATA,
    recommendList:fromJS(data.topicList),
    articleList:fromJS(data.articleList),
    RightList:fromJS(data.recommendList)
})
const getMoreData = (data,nextpage) => ({
    type:actionTypes.GET_MORE_DATA,
    data:fromJS(data),
    nextpage
})
export const LoadMoreData = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res)=>{
            const data = res.data
            dispatch(getMoreData(data.data, page +1 ))
        }).catch(() => {
            console.log('error')
        })
    }
}
export const ScroolToTop = (show) => ({
    type:actionTypes.SRCOOL_TO_TOP,
    show
})

export  const getList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data
            dispatch(getHomeData(data))
        }).catch(() => {
            console.log('error')
        })
    }
}