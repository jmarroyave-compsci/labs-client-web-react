import { ApolloClient, InMemoryCache } from "@apollo/client"
import Constants from 'app/config/constants'

export const fetch = async function( query, vars, transformResponse ){
  const apolloClient = new ApolloClient({
    uri: Constants.SERVERS.GRAPHQL,
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
