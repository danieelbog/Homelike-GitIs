import { Outlet } from 'react-router-dom';
import { client } from '@/api/apollo';
import { ApolloProvider } from '@apollo/client';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function DefaultLayout() {
    return (
        <ApolloProvider client={client}>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </ApolloProvider>
    );
}
