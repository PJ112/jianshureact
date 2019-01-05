import React, { Component } from 'react';
import '../../static/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {
    constructor (props) {
        super(props);
        this.state={
            focus:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    render () {
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
                           in={this.state.focus}
                           timeout={200}
                           classNames='slide'
                       >
                           <Button
                               className={this.state.focus ? 'focus': ''}
                               onFocus={this.handleInputFocus}
                               onBlur={this.handleInputBlur}
                           ></Button>
                       </CSSTransition>
                       <i className={this.state.focus ? 'focus input-search iconfont' : 'input-search iconfont'}>&#xe609;</i>
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
    handleInputFocus () {
        this.setState({
            focus: true
        })
    }
    handleInputBlur () {
        this.setState({
            focus: false
        })
    }
}
export default Header;