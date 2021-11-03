import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import CoreApp from 'core/app/dashboard';
import uris from 'shared/trends/uris';
import Footer from './footer'
import Header from './header'
import { gql, useQuery, useApolloClient } from "@apollo/client";
import config from 'app/config';
import nav from 'data/app/navigation-drawer';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from 'com/pages/search/automata'
import { getEntitiesArrayState } from 'com/entities'

export const QRY_SUGGESTIONS = gql`
query getSuggestions($qry:String) {
  searchSuggestions(qry: $qry){
    suggestions
  }
}
`;

const App = ( props ) =>{
  const APP = useSelector(( state ) => state.app )
  const dispatch = useDispatch();

  const apolloClient = useApolloClient()
  const router = useRouter();

  const isServerOnline = async (qry) => {
    const serverResponse = await apolloClient.query({query: QRY_SERVER, fetchPolicy: "cache-first", variables: { qry: qry } } );
    console.log("serverResponse", serverResponse.error);
    return true;
  }

  const onSearchQuery = (qry) => {
    qry = qry.toLowerCase()
    dispatch( fetchData( { qry : qry, page: 1, entities: getEntitiesArrayState(true) } ) )
  }

  const onSearchSuggestions = async (qry) => {
    qry = qry.toLowerCase()
    var { loading, error, data } = await apolloClient.query({query: QRY_SUGGESTIONS, fetchPolicy: "cache-first", variables: { qry: qry } } );
    return data.searchSuggestions.suggestions;
  }

  var { params, children } = props;    

  return(
      <CoreApp        
        notifications={false} 
        title={APP.title}
        pageTitle={config.APP.PAGE_TITLE} 
        footer={<Footer params={params.footer}/>}
        onSearchQuery={onSearchQuery}
        onSearchSuggestions={onSearchSuggestions}
        search={true}
        nav={nav}
        {...props}
        breadcrumbs={(props.breadcrumbs) ? props.breadcrumbs : APP.breadcrumbs}
        >
          {children}
      </CoreApp>
  )

}

export default App;