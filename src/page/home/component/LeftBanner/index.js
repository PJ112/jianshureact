import React,{ Component } from 'react';
import Slider from "react-slick";
import {
    BannerWrap
} from './style';
import './banner.css'
class LeftBanner extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            transition:'.2s',
        };
        return (
            <Slider {...settings}>
                <BannerWrap>
                    <img className='img' src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/28/1db9f61fa1dee3b2224f7d22510f3a46.jpg'/>
                </BannerWrap>
                <BannerWrap>
                    <img className='img' src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/28/1db9f61fa1dee3b2224f7d22510f3a46.jpg'/>
                </BannerWrap>
                <BannerWrap>
                    <img className='img' src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/28/1db9f61fa1dee3b2224f7d22510f3a46.jpg'/>
                </BannerWrap>
                <BannerWrap>
                    <img className='img' src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/28/1db9f61fa1dee3b2224f7d22510f3a46.jpg'/>
                </BannerWrap>
                <BannerWrap>
                    <img className='img' src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/28/1db9f61fa1dee3b2224f7d22510f3a46.jpg'/>
                </BannerWrap>
            </Slider>
        );
    }
}
export default LeftBanner;