import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC__DATA_GRAPHQL,
    cache: new InMemoryCache(),
});

export default client;