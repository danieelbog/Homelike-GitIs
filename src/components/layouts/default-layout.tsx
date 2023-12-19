import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import client from '@/api/apollo';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ScrollToTop from './sroll-to-top/scroll-to-top';

const DefaultLayout = (): JSX.Element => {
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
