import React from 'react';
import CoreProxy from './proxy';
import withModule from '../../components/with-module';
import ErrorBoundry from '../../components/error';

import '../assets/css/section.scss';

class LayoutSection extends React.Component{
	render(){
		const {className, cover, padding, children, hero} = this.props;
		const height = (cover === true) ? "100vh" : "inherit"; 
		return (
			<CoreProxy 
				xs={this.renderSection(children, className, height, '2rem 0rem')}
				sm={this.renderSection(children, className, height, '3rem 0rem')}
				md={this.renderSection(children, className, height, '4rem 2.5rem')}
			/>				
		);
	}

	renderSection(children, className, height, padding){
		return (
			<ErrorBoundry from="/core/ui/section">
				<div className={`com-layout-section`}>
					<div className={`${className}`} style={{boxSizing: 'border-box', width: '100%', height: height, padding: padding}}>
						{children}
					</div>
				</div>
			</ErrorBoundry>
		)		
	}
} 

export default withModule(LayoutSection);