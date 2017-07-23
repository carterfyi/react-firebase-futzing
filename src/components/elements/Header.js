import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import logo from 'assets/logo-full-lightbg.svg';



const activeStyle = {
    backgroundColor: "#feb82c"
}

let Nav = (props) => {
    return (
        <NavLink styleName="nav" activeStyle={activeStyle} to={'/' + props.link}>
            <div styleName="text">{props.link}</div>
        </NavLink>
    )
}
Nav = CSSModules(Nav, styles);

class Header extends React.Component {
    render() { 
        return (
            <div styleName="base"><div styleName="wrap">
                <Link styleName="logo" to="/"><img src={logo}/></Link>
                <div styleName="navbar">
                    <Nav link="news" />
                    <Nav link="smash" />
                    <Nav link="splatoon" />
                    <Nav link="staff" />
                    <Nav link="contact" />
                </div>
            </div></div>
        )
    }
}

export default CSSModules(Header, styles);