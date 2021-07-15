import React from 'react';
import HomePage from './HomePage';
import Features from './Features';
import GettingStarted from './GettingStarted';
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import Header from '../components/Header';

const page = () => {
    return(
        <React.Fragment>
            <Header />
            <HomePage />
            <GettingStarted />
            <Features />
            <Pricing />
            <ContactUs />
        </React.Fragment>
    );
};

export default page;