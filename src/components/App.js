import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './App.scss';



class App extends React.Component {
 
    render() {

        return (
            <div styleName="container">
                <h1>Hello World</h1>
            </div>
        ) 
    }
}

export default CSSModules(App, styles);