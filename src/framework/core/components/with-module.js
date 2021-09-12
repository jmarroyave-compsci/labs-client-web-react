import React from 'react';
import ErrorBoundry from './error';
import Loading from './loading.js';

const withModule = ModuleComponent =>
	class extends React.Component {
		render(){
			const title = ("title" in this.props) ? this.props.title : null;
			const ph = ("placeholder" in this.props) ? this.props.placeholder : {};
			const phW = (ph.width) ? ph.width : '100%';
			const phH = (ph.height) ? ph.height : '250';
			return (
				<ErrorBoundry from={title} style={{width:'100%'}}>
					<ModuleComponent {...this.props}/>
				</ErrorBoundry>
			);
		}
	}

export default withModule;