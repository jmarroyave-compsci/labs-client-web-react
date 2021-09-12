import React from 'react';
import VersionLabel from 'core/ui/debug/version_label';
import withModule from 'core/components/with-module';
[[imports]]

class Component extends React.Component {
	constructor(props){
		super(props);

		this.index = [
[[json]]];
	}
  
	render(){
		const title = "[[component]]";
		const Control = window.__components.resolve(this.index, title);
		return (
			<div style={{position: 'relative'}}>
				<VersionLabel index={this.index} visible={window.__api.debug}/>
				<Control {...this.props}/>
			</div>
		)
	}
}

export default withModule(Component);