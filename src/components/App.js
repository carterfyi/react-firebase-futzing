import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

import 'font-awesome/css/font-awesome.css';

// Page Elements
import Header from 'elements/Header';
import Footer from 'elements/Footer';

// Routes
// import './routes/Home'

class App extends React.Component {

    render() {

        return (
            <Router>
                <div styleName="container">
                    <Header />
                    <div styleName="main"></div>
                    <Footer />
                </div>
            </Router>
        ) 
    }
}

export default CSSModules(App, styles);