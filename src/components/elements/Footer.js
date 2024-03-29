import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.scss';
import Icon from 'react-fontawesome';

let Social = (props) => {
    return (
        <Icon name={props.icon} ref={props.link} />
    )
}
class Footer extends React.Component {
    render() { 
        return (
            <div styleName="base"><div styleName="wrap">
                <div styleName="socials">
                    <a href="http://twitter.com/EndGame_TV" target="_blank"><Icon styleName="icon" size="2x" name="twitter" /></a>
                    <a href="http://twitch.tv/EndGameTV1" target="_blank"><Icon styleName="icon" size="2x" name="twitch" /></a>
                    <a href="http://youtube.com/endgametv" target="_blank"><Icon styleName="icon" size="2x" name="youtube-play" /></a>
                    <a href="http://discord.io/endgametv" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"> <g> <path  d="M104.4,103.9c-5.7,0-10.2,5-10.2,11.1c0,6.1,4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1 C114.7,108.9,110.1,103.9,104.4,103.9z"/> <path  d="M140.9,103.9c-5.7,0-10.2,5-10.2,11.1c0,6.1,4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1 C151.1,108.9,146.6,103.9,140.9,103.9z"/> <path  d="M189.5,20H55.5C44.2,20,35,29.2,35,40.6v135.2c0,11.4,9.2,20.6,20.5,20.6h113.4l-5.3-18.5l12.8,11.9l12.1,11.2 L210,220v-44.2v-10V40.6C210,29.2,200.8,20,189.5,20z M150.9,150.6c0,0-3.6-4.3-6.6-8.1c13.1-3.7,18.1-11.9,18.1-11.9 c-4.1,2.7-8,4.6-11.5,5.9c-5,2.1-9.8,3.5-14.5,4.3c-9.6,1.8-18.4,1.3-25.9-0.1c-5.7-1.1-10.6-2.7-14.7-4.3c-2.3-0.9-4.8-2-7.3-3.4 c-0.3-0.2-0.6-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.4-0.3c-1.8-1-2.8-1.7-2.8-1.7s4.8,8,17.5,11.8c-3,3.8-6.7,8.3-6.7,8.3 c-22.1-0.7-30.5-15.2-30.5-15.2c0-32.2,14.4-58.3,14.4-58.3c14.4-10.8,28.1-10.5,28.1-10.5l1,1.2c-18,5.2-26.3,13.1-26.3,13.1 s2.2-1.2,5.9-2.9c10.7-4.7,19.2-6,22.7-6.3c0.6-0.1,1.1-0.2,1.7-0.2c6.1-0.8,13-1,20.2-0.2c9.5,1.1,19.7,3.9,30.1,9.6 c0,0-7.9-7.5-24.9-12.7l1.4-1.6c0,0,13.7-0.3,28.1,10.5c0,0,14.4,26.1,14.4,58.3C181.5,135.4,173,149.9,150.9,150.6z"/> </g> </svg> </a>
                </div>
                    
                <div styleName="copyright"><Icon name="copyright" />2017, EndGameTV</div>
            </div></div>
        )
    }
}

export default CSSModules(Footer, styles);