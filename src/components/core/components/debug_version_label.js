import React from 'react';

class Component extends React.Component {
	render(){	
		var { index, visible } = this.props;
		if(!visible) return null;		
		const version = window.__components.getCurrentVersion();
		const versionRes = window.__components.getResolvedVersion(index);
		return (
			<div className='mod-version-label'>
				{("title" in this.props) && <div>{this.props.title}</div>}
				<div>resolved:{versionRes.family}:{versionRes.version[0]}.{versionRes.version[1]}.{versionRes.version[2]}</div>
				<div>required:{version.family}:{version.version[0]}.{version.version[1]}.{version.version[2]}</div>
        	</div>
		)
	}

}

export default Component;