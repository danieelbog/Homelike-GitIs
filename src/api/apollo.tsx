import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: 'Bearer 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'
        }
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
