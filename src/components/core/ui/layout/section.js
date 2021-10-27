import React from 'react';
import ErrorBoundry from 'core/ui/error-boundry';
import theme from 'app/config/theme/main';
import Box from '@mui/material/Box';

class LayoutSection extends React.Component{
	render(){
		var {className, cover, padding, children, hero, rounded, compact} = this.props;
		var height = (cover === true) ? "100vh" : "inherit"; 
		rounded = (rounded === true) ?  true : false;
		const colors = this.getStyle(className)
		return (
			<ErrorBoundry from="/core/ui/section">
				<Box className={`com-layout-section ${className}`} sx={{ 
					padding: {
						xs: this.getPadding("xs"),
						sm: this.getPadding("sm"),
						md: this.getPadding("md"),
						},
					boxSizing: 'border-box', 
					width: '100%', 
					height: height, 
					borderRadius: (rounded) ? "0.5rem 0.5rem 0 0" : 0,
					background: colors.background,
					color: colors.color,
				}}
				>
					{children}
				</Box>				
			</ErrorBoundry>
		);
	}

	getPadding(target){
		var { compact } = this.props;

		const paddings = {
			xs: {top: 1.5, bottom: 3, left: 1.5, right: 1.5}, 
			sm: {top: 2, bottom: 4, left: 3, right: 3}, 
			md: {top: 3, bottom: 2.5, left: 2.5, right: 2.5}, 
		}
		const cPad = paddings[target]
		const padding = `${(compact) ? cPad.top : cPad.top}rem ${cPad.right}rem ${(compact) ? cPad.top : cPad.bottom}rem ${cPad.left}rem`
	
		return padding;		
	}

	getStyle( style ){
		switch( style ){
			case "section-0":
				return {
					background: `linear-gradient(60deg, ${theme.palette.primary.dark} 0%, #000 150%)`,
				    color: theme.palette.primary.contrastText,   
				}
			case "section-1":
				return {
					background: 'linear-gradient(60deg, ${theme.palette.primary.light} 0%, rgba(85,85,85,1) 100%)',
				    color: 'black',   
				}
			case "section-2":
				return {
					background: 'linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)',
				    color: '#444',   
				}
			case "section-3":
				return {
					background: 'linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)',
				    color: '#333',   
				}
			default: 
				return {
					background: 'inherit',
				    color: 'inherit',   
				}
		}
	}	
} 

export default LayoutSection;