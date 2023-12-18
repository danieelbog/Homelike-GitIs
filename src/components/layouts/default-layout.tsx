import { Outlet } from 'react-router-dom';
import { client } from '@/api/apollo';
import { ApolloProvider } from '@apollo/client';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function DefaultLayout() {
    return (
        <div className="container-fluid g-0">
            <ApolloProvider client={client}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ApolloProvider>
        </div>
    );
}
