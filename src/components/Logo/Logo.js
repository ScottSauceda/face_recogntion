import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain-80.png';

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
             <Tilt className = 'Tilt pa3'>
                <div >
                    {/* <h1>React Parallax Tilt 👀</h1> */}
                    <img src={brain} alt="brain logo" style={{paddingTop: '5px'}}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;