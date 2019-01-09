import  * as actionTypes  from './actionTypes'
import axios from "axios";
import {fromJS} from 'immutable'
const getHomeData = (data) => ({
    type:actionTypes.GET_HOME_DATA,
    recommendList:fromJS(data.topicList),
    articleList:fromJS(data.articleList),
    RightList:fromJS(data.recommendList)
})
export  const getList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data
            console.log(data)
            dispatch(getHomeData(data))
        }).catch(() => {
            console.log('error')
        })
    }
}