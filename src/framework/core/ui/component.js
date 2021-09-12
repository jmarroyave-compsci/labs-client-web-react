import React from 'react';
import ErrorBoundry from 'core/components/error';
import Loading from 'core/ui/loading';

const component = ModuleComponent =>
	class extends React.Component {
		render(){
			const title = ("title" in this.props) ? this.props.title : null;
			const ph = ("placeholder" in this.props) ? this.props.placeholder : {};
			const phW = (ph.width) ? ph.width : '100%';
			const phH = (ph.height) ? ph.height : '250';

			var loading = false;
			if(this.props.check_data !== false && "data" in this.props){
				if(!this.props.data || this.props.data == null){
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