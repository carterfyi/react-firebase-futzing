import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './BodyBlock.scss';

let Home = (props) => {
    return() {
        return (
            <div styleName="base" style={{backgroundColor: props.color}}>
                <div styleName="wrap">
                    {props.children}
                </div>
            </div>
        )
    }
}

export default CSSModules(Home, styles);