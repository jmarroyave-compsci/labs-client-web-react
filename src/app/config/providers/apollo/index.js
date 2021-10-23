import { ApolloClient, InMemoryCache } from "@apollo/client";
import constants from 'app/config/constants';

const client = new ApolloClient({
    uri: constants.SERVERS.GRAPHQL,
    cache: new InMemoryCache(),
});

export default client;