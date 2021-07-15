import React from 'react';
import {Link} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'
import routes from '../routes';

const Header = () => {
    return (
        <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
            <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                    <RouterLink to={routes.HOME} >
                        Home
                        </RouterLink>
                </Link>
            </li> 
            <li>
                <Link  to="gettingStarted" spy={true} smooth={true}>
                    <RouterLink to={routes.GETTING_STARTED} > 
                        Getting Started 
                    </RouterLink>
                </Link>
            </li>   
            <li>
                <Link to="features" spy={true} smooth={true}>
                    <RouterLink to={routes.FEATURES}>
                        Features
                    </RouterLink>
                </Link>
                
            </li>   
            <li>
                <Link to="pricing" spy={true} smooth={true}>
                    <RouterLink to={routes.PRICING} >
                        Pricing
                    </RouterLink>
                </Link>
            </li>  
            <li>
                <Link to="contactUs" spy={true} smooth={true}>
                    <RouterLink to={routes.CONTACT} >
                        Contact Us
                    </RouterLink>
                </Link>
            </li>    
        </ul>
    );
};

export default Header;