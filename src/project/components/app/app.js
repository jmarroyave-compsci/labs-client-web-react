import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import CoreApp from 'core/app/dashboard';
import uris from 'shared/trends/uris';
import Footer from 'components/app/footer'
import Header from 'components/app/header'
import { gql, useQuery, useApolloClient } from "@apollo/client";

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


function App( props ){
  const apolloClient = useApolloClient()
  const history = useHistory();

  const isServerOnline = async (qry) => {
    const serverResponse = await apolloClient.query({query: QRY_SERVER, fetchPolicy: "cache-first", variables: { qry: qry } } );
    console.log("serverResponse", serverResponse.error);
    return true;
  }

  const onSearchQuery = (qry) => {
    //console.log("onSearchQuery", qry)
    history.push(`/search/${encodeURIComponent(qry)}`);
  }

  const onSearchSuggestions = async (qry) => {
    //console.log("onSearchSuggestions", qry)
    //return ["The hobbit", "Marlon Brando", "La prueba erronea"]
    var { loading, error, data } = await apolloClient.query({query: QRY_SUGGESTIONS, fetchPolicy: "cache-first", variables: { qry: qry } } );
    return data.searchSuggestions.suggestions;
  }

  var { app, data, children } = props;    
  const page_title = `TV | Movies | Podcasts`;
  const title = `JMArroyave`;

  return(
      <CoreApp        
        notifications={false} 
        title={title}
        pageTitle={page_title} 
        nav={window.__nav} 
        footer={<Footer/>}
        onSearchQuery={onSearchQuery}
        onSearchSuggestions={onSearchSuggestions}
        {...props}
        search={false}
        >
          <Header noCheck app={app} data={data}/>
          <div className={"content"}>
            {children}
          </div>          
      </CoreApp>
  )

}


//App.contextType = AppContext;
export default App;