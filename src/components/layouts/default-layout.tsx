import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Popover } from 'bootstrap';

import client from '@/api/apollo';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ScrollToTop from './sroll-to-top/scroll-to-top';

const setBootstrapPopover = () => {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
        new Popover(popover);
    });
    document.getElementById('external-loader')?.remove();
};

const DefaultLayout = (): JSX.Element => {
    setBootstrapPopover();
    return (
        <ApolloProvider client={client()}>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </ApolloProvider>
    );
};

export default DefaultLayout;
