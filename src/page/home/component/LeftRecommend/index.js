import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrap,
    RecommendItem
} from './style';
class LeftRecommend extends Component{
    render () {
        return (
          <RecommendWrap>
              {
                  this.props.list.map((item)=>(
                      <RecommendItem
                          key={item.get('id')}
                      >
                          <img
                              className='img'
                              src={item.get('imgUrl')}
                          />
                          {item.get('title')}
                      </RecommendItem>
                  ))
              }
          </RecommendWrap>
        )
    }
}
const mapState = (state) => ({
    list:state.get('home').get('recommendList')
})
export default connect(mapState,null)(LeftRecommend);
