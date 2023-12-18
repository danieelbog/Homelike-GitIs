import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useSelector } from 'react-redux';
import { IRootState } from '../types/IStoreState';

const useAuthApolloClient = () => {
    const api = useSelector((state: IRootState) => state.api.value);

    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql'
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: api ? `Bearer ${api}` : ''
            }
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

export default useAuthApolloClient;
