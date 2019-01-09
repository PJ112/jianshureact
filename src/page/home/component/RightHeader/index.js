import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import '../../style'
class RightHeader extends Component {
    render () {
        return(
          <Fragment>
              {
                  this.props.list.map((item) => (
                      <img className='RightHeaderImg' src={item.get('imgUrl')}/>
                  ))
              }
          </Fragment>
        )
    }
}
const mapState = (state) => ({
    list:state.get('home').get('RightList')
})
export  default connect(mapState,null)(RightHeader);