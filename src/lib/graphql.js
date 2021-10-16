import { ApolloClient, InMemoryCache } from "@apollo/client"

export const fetch = async function( query, vars, transformResponse ){
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC__DATA_GRAPHQL,
    cache: new InMemoryCache(),
  });

  var response = await apolloClient.query({
    query : query,
    variables: vars,
  })

  if( transformResponse )
    response = transformResponse( response )

  return response;
}
