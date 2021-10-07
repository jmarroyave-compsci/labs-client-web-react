import React from 'react';
import CoreProxy from './proxy';
import withModule from '../../components/with-module';
import ErrorBoundry from '../../components/error';

//import './section.scss';

class LayoutSection extends React.Component{
	render(){
		var {className, cover, padding, children, hero, rounded} = this.props;
		var height = (cover === true) ? "100vh" : "inherit"; 
		rounded = (rounded === true) ?  true : false;
		return (
			<CoreProxy 
				xs={this.renderSection(children, className, height, '1.5rem 1.5rem 3rem 1.5rem', rounded)}
				sm={this.renderSection(children, className, height, '2rem 3rem 4rem 3rem', rounded)}
				md={this.renderSection(children, className, height, '3rem 2.5rem 3.5rem 2.5rem', rounded)}
			/>				
		);
	}

	renderSection(children, className, height, padding, rounded){
		return (
			<ErrorBoundry from="/core/ui/section">
				<div className={`com-layout-section`}>
					<div className={`${className}`} style={{boxSizing: 'border-box', width: '100%', height: height, padding: padding, borderRadius: (rounded) ? "0.5rem 0.5rem 0 0" : 0}}>
						{children}
					</div>
				</div>
			</ErrorBoundry>
		)		
	}
} 

export default withModule(LayoutSection);