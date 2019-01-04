import styled from 'styled-components';
import logoPic from '../../static/Logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0
`
export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background: url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`  
    height:56px;
    width:945px;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:16px;
    &.left{
        float:left;
        color:#333;
    }
    &.right{
        float:right;
        color:#999;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const Button = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px
    background:#eee;
    height:38px;
    padding:15px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border-radius:19px;
    &::placeholder{
        font-size:14px;
         color:#999
    }
`
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    margin-right:60px
`
export const Btn = styled.div`
    margin-top:9px
    display:inline-block;
    height:38px;
    line-height:0px;
    border-radius:19px;
    border:1px solid #ea6f5a;
    padding:20px
    box-sizing:border-box;
    margin-left:20px;
    &.write{
        color:white;
        background:#ea6f5a;
    }
    &.reg{
       color:#ea6f5a;
    }
`