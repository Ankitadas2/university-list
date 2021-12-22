import React from 'react';
import Banner from '../Banner/Banner';
import List from '../List/List';
import Navbar from '../Navbar/Navebar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <List></List>
        </div>
    );
};

export default Home;