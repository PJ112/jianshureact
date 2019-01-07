import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../static/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from '../header/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchInput,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Button,
    Addition,
    Btn
} from "./style";
class Header extends Component{
    render () {
        const { focus,handleInputFocus,handleInputBlur } = this.props
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchInput>
                        <CSSTransition
                            in={focus}
                            timeout={200}
                            classNames='slide'
                        >
                            <Button
                                className={focus ? 'focus': ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></Button>
                        </CSSTransition>
                        <i className={focus ? 'focus input-search iconfont' : 'input-search iconfont'}>&#xe609;</i>
                    </SearchInput>
                    {this.getList()}
                </Nav>
                <Addition>
                    <Btn className='reg'>注册</Btn>
                    <Btn className='write'>
                        <i className='iconfont'>&#xe615;</i>
                        写文章
                    </Btn>
                </Addition>
            </HeaderWrapper>
        )
    }
    getList () {
        const { list,handleMouseEnter,handleMouseLeave,mouseIn,changePage,totalPage,page } = this.props;
        const JSList = list.toJS()
        const pageList = []
        for (let i = (page-1)*10;i < page*10;i ++){
            pageList.push(<SearchInfoItem key={JSList[i]}>{JSList[i]}</SearchInfoItem>)
        }
        if (this.props.focus || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => changePage(totalPage,page)}
                >
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else{
            return null;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        focus:state.getIn(['header','focus']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave())
        },
        changePage (totalPage,page) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }

}
export default connect(mapStateToProps,MapDispatchToProps)(Header);