import React, {Component, Fragment} from 'react';
import {
    Content,
    ContentLeft,
    ContentRight,
    ContentTitle,
    ContentContent
} from './style';
import { connect } from 'react-redux';
class LeftContent extends Component{
    render () {
        return (
            <Fragment>
                {
                    this.props.list.map((item,index) => (
                       <Content key={index}>
                           <ContentLeft>
                               <ContentTitle>{item.get('title')}</ContentTitle>
                               <ContentContent>{item.get('desc')}</ContentContent>
                           </ContentLeft>
                           <ContentRight>
                               <img className='img' src={item.get('imgUrl')}/>
                           </ContentRight>
                       </Content>
                    ))
                }
            </Fragment>
        )
    }
}
const mapState = (state) => ({
    list:state.get('home').get('articleList')
})
export default connect(mapState,null)(LeftContent);