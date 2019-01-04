import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Button,
    Addition,
    Btn
} from "./style";

class Header extends Component {
    render () {
        return (
            <HeaderWrapper>
                <Logo/>
               <Nav>
                   <NavItem className='left active'>首页</NavItem>
                   <NavItem className='left'>下载App</NavItem>
                   <NavItem className='right'>登录</NavItem>
                   <NavItem className='right'>Aa</NavItem>
                   <Button></Button>
               </Nav>
                <Addition>
                    <Btn className='reg'>注册</Btn>
                    <Btn className='write'>写文章</Btn>
                </Addition>
            </HeaderWrapper>
        )
    }
}
export default Header;