import React,{ Component } from 'react';
import {
    HomeWrap,
    HomeLeft,
    HomeRight,
    LeftBr,
    LoadMore,
    ToTop
} from './style';
import {connect} from 'react-redux'
import LeftBanner from './component/LeftBanner';
import LeftContent from './component/LeftContent';
import LeftRecommend from './component/LeftRecommend';
import { actionCreators } from './store';
import RightHeader from './component/RightHeader'
class Home extends Component {
    constructor (props){
        super(props)
        this.state = {
            top:true
        }
    }
    render () {
        const {LoadMoreData,page} = this.props
        return(
            <HomeWrap>
                <HomeLeft>
                    <LeftBanner/>
                    <LeftRecommend/>
                    <LeftBr/>
                    <LeftContent/>
                    <LoadMore onClick={() => (LoadMoreData(page))}>更多内容</LoadMore>
                </HomeLeft>
                <HomeRight><RightHeader/></HomeRight>
                { this.props.scroolTop ? <ToTop onClick={this.ToTop}>顶部</ToTop> : null}
            </HomeWrap>
        )
    }
    componentDidMount () {
        this.props.getHomeData();
        this.bindEvents()
    }
    ToTop () {
        window.scrollTo(0, 0)
    }
    bindEvents () {
        window.addEventListener('scroll',this.props.changeScroolTopShow)
    }
    componentWillUnmount () {
        window.removeEventListener('scroll',this.props.changeScroolTopShow)
    }
}
const mapState = (state) => ({
    page:state.getIn(['home','page']),
    scroolTop:state.getIn(['home','scroolTop'])
})
const MapDispatch = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getList())
    },
    LoadMoreData (page){
        dispatch(actionCreators.LoadMoreData(page))
    },
    changeScroolTopShow () {
       if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.ScroolToTop(true))
       }else{
           dispatch(actionCreators.ScroolToTop(false))
       }
    }
 })
export default connect(mapState,MapDispatch)( Home);