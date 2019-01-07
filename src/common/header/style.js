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
export const SearchInput = styled.div`
    position:relative
    .iconfont {
       position:absolute;
       height:30px
       padding:10px
       box-sizing:border-box;
       border-radius:30px;
       background:#eee;
       margin-left:-40px
       margin-top:13px;
       &.focus{
          background:#777;
          color:#fff
       }
    }
    .slide-enter{
        transition: all .2s ease-out;   
    }
 .slide-enter-active{
      width:240px   
    }
 .slide-exit{
    transition: all .2s ease-out;
    }
 .slide-exit-active{
    width:160px    
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:350px;
    width:250px;
    paddind:20px 20px 10px;
    border-radius:4px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    border-bottom:1px solid #f0f0f0;
`
export const SearchInfoTitle = styled.span`
    display:inline-block;
    padding:10px;
    
`
export const SearchInfoSwitch = styled.a`
    float:right;
    padding:10px;
    color:#777;
    font-size:13px;
    
`
export const SearchInfoList = styled.ul`
    margin:10px 0 10px 10px;
`
export const SearchInfoItem = styled.li`
    display:inline-block;
    padding:2px 6px;
    line-height:28px;
    border:1px solid #ddd;
    margin-right:10px;
    color:#787878;
    margin-bottom:10px;
    font-size:12px;
    border-radius:3px;
    
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
        .iconfont{
            background:none;
            font-size:20px;
        }
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
    &.focus{
        width:240px;
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