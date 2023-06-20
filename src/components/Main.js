import React from 'react';
import Header from './Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Message from './Homepage/Message/Message';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Message></Message> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;