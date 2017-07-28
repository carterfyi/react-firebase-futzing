import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.scss';


class Carousel extends React.Component {
    
    render() {
        return (
            <div styleName="carousel"><div styleName="wrap">

            </div></div>
        )
    }
} 
Carousel = CSSModules(Carousel, styles);



class Home extends React.Component {

    render() {
        return (
            <Carousel />
        )
    }
}

export default CSSModules(Home, styles);