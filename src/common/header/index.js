import React from 'react';
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
    Button,
    Addition,
    Btn
} from "./style";
const Header = (props) => {
    return (
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
                        in={props.focus}
                        timeout={200}
                        classNames='slide'
                    >
                        <Button
                            className={props.focus ? 'focus': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></Button>
                    </CSSTransition>
                    <i className={props.focus ? 'focus input-search iconfont' : 'input-search iconfont'}>&#xe609;</i>
                </SearchInput>
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
const mapStateToProps = (state) => {
    return {
        focus:state.getIn(['header','focus'])
        // focus:state.get('header').get('focus')
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur())
        }
    }

}
export default connect(mapStateToProps,MapDispatchToProps)(Header);