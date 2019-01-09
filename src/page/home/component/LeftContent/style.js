import styled from 'styled-components';
export const Content = styled.div`
    width:650px;
    padding:20px 0;
    margin-left:20px;
    overflow:hidden;
    border-bottom:1px solid #f0f0f0;
`
export const ContentLeft = styled.div`
    float:left; 
    width:525px;
`
export const ContentTitle = styled.a`
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
`
export const ContentContent = styled.div`
    font-size:12px;
    line-height:24px;
    color:#999;
`
export const ContentRight = styled.div`
    float:right;
    .img{
        vertical-align:top;
         width:125px;
         height:100px;
         background-size:125px 100px;
         border-radius: 10px;    
    }
`