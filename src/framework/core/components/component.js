import React from 'react';
import ErrorBoundry from './error';
import Loading from '../ui/loading';

const component = ModuleComponent =>
	class extends React.Component {
		render(){
			var { title, placeholder, noCheck, check_data, data} = this.props;
			noCheck = (noCheck === true) ? true : false;
			check_data = (check_data === false) ? false : true;
			const ph = (placeholder) ? placeholder : {};
			const phW = (ph.width) ? ph.width : '100%';
			const phH = (ph.height) ? ph.height : '250';

			var loading = false;
			if(!noCheck && check_data){
				if(!data || data == null){
					loading = true;
				}
			}

			return (
				<ErrorBoundry from={title} style={{width:'100%'}}>
					{loading && <Loading/>}
					{!loading && <ModuleComponent {...this.props}/>}
				</ErrorBoundry>
			);
		}
	}

export default component;