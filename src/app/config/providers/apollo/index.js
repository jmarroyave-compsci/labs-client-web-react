import { ApolloClient, InMemoryCache } from "@apollo/client";
import config from 'app/config';

const client = new ApolloClient({
    uri: config.SERVERS.GRAPHQL,
    cache: new InMemoryCache(),
});

export default client;