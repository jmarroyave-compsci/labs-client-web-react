import { ApolloClient, InMemoryCache } from "@apollo/client"

export const fetch = async function( query, vars ){
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC__DATA_GRAPHQL,
    cache: new InMemoryCache(),
  });

  return await apolloClient.query({
    query : query,
    variables: vars,
  })
}
