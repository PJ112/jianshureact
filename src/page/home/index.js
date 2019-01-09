import React,{ Component } from 'react';
import {
    HomeWrap,
    HomeLeft,
    HomeRight,
    LeftBr,
    LoadMore
} from './style';
import {connect} from 'react-redux'
import LeftBanner from './component/LeftBanner';
import LeftContent from './component/LeftContent';
import LeftRecommend from './component/LeftRecommend';
import { actionCreators } from './store';
import RightHeader from './component/RightHeader'
class Home extends Component {
    render () {
        return(
            <HomeWrap>
                <HomeLeft>
                    <LeftBanner/>
                    <LeftRecommend/>
                    <LeftBr/>
                    <LeftContent/>
                </HomeLeft>
                <HomeRight><RightHeader/></HomeRight>
                <LoadMore>更多内容</LoadMore>
            </HomeWrap>
        )
    }
    componentDidMount () {
        this.props.getHomeData()
    }
}
const MapDispatch = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getList())
    }
})
export default connect(null,MapDispatch)( Home);