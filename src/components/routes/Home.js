import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.scss';

class Home extends React.Component {


    render() {
        return (
            <div styleName="title">Home Page</div>
        )
    }
}

export default CSSModules(Home, styles);