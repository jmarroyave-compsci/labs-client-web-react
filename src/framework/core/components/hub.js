import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from './error';
import { createBrowserHistory } from "history";
import LoadableComponent from 'core/components/loadable_component';
import PageLoading from 'core/components/page_loading';

class Hub extends React.Component {
	render() {	
		var { navigation, basename } = this.props;
		var routes = (navigation.options) ? navigation.options : navigation.routes;
		var page404 = navigation.page404;

		if(!routes) {
			console.error("HUB: NO ROUTES DEFINED");
			return <div/>  
		}

		var history = (basename != "/") ? createBrowserHistory({basename: basename}) : createBrowserHistory();

		return (
			<ErrorBoundry from="hub">
				<Router history={history}>
					<Switch>
						{routes.map((r, idx) => 
							r.component && 
							<Route key={idx} exact={(r.exact === true) ? true : false} path={r.route}>
								<LoadableComponent uri={r.component} loadingComponent={<PageLoading/>}/>
							</Route>
						)}  
						{page404 && 
							<Route component={page404}/>
						} 
					</Switch>
				</Router>		
			</ErrorBoundry>
		);
	}
}

export default Hub;