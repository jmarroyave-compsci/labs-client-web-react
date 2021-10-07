import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import CoreApp from 'core/app/dashboard';
import uris from 'shared/trends/uris';
import Footer from 'components/app/footer'
import Header from 'components/app/header'
import { gql, useQuery, useApolloClient } from "@apollo/client";
import features from 'config/values/features';
import config from 'config/values/default';
import nav from 'config/navigation';

export const QRY_SUGGESTIONS = gql`
query getSuggestions($qry:String) {
  searchSuggestions(qry: $qry){
    suggestions
  }
}
`;

export const QRY_SERVER = gql`
query getSuggestions($qry:String) {
  searchSuggestions(qry: $qry){
    suggestions
  }
}
`;

const App = ( props ) =>{
  const apolloClient = useApolloClient()
  const router = useRouter();

  const isServerOnline = async (qry) => {
    const serverResponse = await apolloClient.query({query: QRY_SERVER, fetchPolicy: "cache-first", variables: { qry: qry } } );
    console.log("serverResponse", serverResponse.error);
    return true;
  }

  const onSearchQuery = (qry) => {
    qry = qry.toLowerCase()
    //console.log("onSearchQuery", qry)
    router.push(`/search/${encodeURIComponent(qry)}`);
  }

  const onSearchSuggestions = async (qry) => {
    qry = qry.toLowerCase()
    //console.log("onSearchSuggestions", qry)
    //return ["The hobbit", "Marlon Brando", "La prueba erronea"]
    var { loading, error, data } = await apolloClient.query({query: QRY_SUGGESTIONS, fetchPolicy: "cache-first", variables: { qry: qry } } );
    return data.searchSuggestions.suggestions;
  }

  var { params, children } = props;    

  return(
      <CoreApp        
        notifications={false} 
        title={params.page.title}
        pageTitle={params.page.pageTitle} 
        footer={<Footer params={params.footer}/>}
        onSearchQuery={onSearchQuery}
        onSearchSuggestions={onSearchSuggestions}
        search={true}
        nav={nav}
        {...props}
        >
          {children}
      </CoreApp>
  )

}


//App.contextType = AppContext;
export default App;