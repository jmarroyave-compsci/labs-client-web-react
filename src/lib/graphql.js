import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client"
import Constants from 'app/config/constants'

export const fetch = async function( query, vars, transformResponse ){
    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }

  const apolloClient = new ApolloClient({
    uri: Constants.SERVERS.GRAPHQL,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,    
  });

  var response = await apolloClient.query({
    query : query,
    variables: vars,
  })

  //console.log(JSON.stringify(response))

  if( transformResponse )
    response = transformResponse( response )

  return response;
}
