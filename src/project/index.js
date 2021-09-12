import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Store } from 'state/store';
import Hub from 'core/components/hub';
import NAV from 'config/navigation';
import Constants from 'config/constants';
import { AppProvider } from 'state/contexts/app';
import SERVER from 'config/values/server';


import "./index.scss";
import 'core/ui/assets/css/app.scss';
import 'shared/globals/footer/footer.scss';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: SERVER.DATA_GRAPHQL,
  cache: new InMemoryCache()
});


class Index extends React.Component{
	componentDidMount(){
		var phs = document.getElementsByClassName('___placeholder');
		for(var i = phs.length - 1; i >= 0; i--){
			var node = phs.item(i);
			node.parentNode.removeChild(node);
		}
	}

	render(){
		return (
		  <ApolloProvider client={client}>
				<Provider store={Store()}>
					<AppProvider>
						<Hub basename={Constants.CONF_ROUTING_BASEPATH} navigation={new NAV()}/>
					</AppProvider>
				</Provider>
  		</ApolloProvider>
		)
	} 
}

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(Index)
