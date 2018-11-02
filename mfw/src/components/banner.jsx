import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js'

class Banner extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return <div className="banner swiper-container">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide"><img src="https://p4-q.mafengwo.net/s12/M00/33/AE/wKgED1vZkFqAe5XHAANxv9_2IsQ34.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90" alt=""/></li>
                            <li className="swiper-slide" ><img src="https://p4-q.mafengwo.net/s12/M00/33/AE/wKgED1vZkFqAe5XHAANxv9_2IsQ34.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90" alt=""/></li>
                            <li className="swiper-slide" ><img src="https://p4-q.mafengwo.net/s12/M00/33/AE/wKgED1vZkFqAe5XHAANxv9_2IsQ34.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90" alt=""/></li>
                        </ul>
                </div>
    }
    componentDidMount(){
        new Swiper('.banner',{
            autoplay:true
        })
    }
}
export default Banner