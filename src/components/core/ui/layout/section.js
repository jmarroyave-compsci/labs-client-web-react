import React, { useContext, useMemo } from 'react';
import ErrorBoundry from 'core/ui/error-boundry';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";

const LayoutSection = ( props ) => {
  	const theme = useTheme();
	var {className, cover, padding, children, hero, rounded, compact} = props;
  	const colors = useMemo( ()=>{
  		return getStyle(className, theme)
  	},[])

	var height = (cover === true) ? "100vh" : "inherit"; 
	rounded = (rounded === true) ?  true : false;
	
	return (
		<ErrorBoundry from="/core/ui/section">
			<Box className={`com-layout-section ${className}`} sx={{ 
				padding: {
					xs: getPadding("xs", props ),
					sm: getPadding("sm", props ),
					md: getPadding("md", props ),
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

const getPadding = (target, props) => {
	var { compact } = props;

	const paddings = {
		xs: {top: 1.5, bottom: 3, left: 1.5, right: 1.5}, 
		sm: {top: 2, bottom: 4, left: 3, right: 3}, 
		md: {top: 3, bottom: 2.5, left: 2.5, right: 2.5}, 
	}
	const cPad = paddings[target]
	const padding = `${(compact) ? cPad.top : cPad.top}rem ${cPad.right}rem ${(compact) ? cPad.top : cPad.bottom}rem ${cPad.left}rem`

	return padding;		
}

const getStyle = ( style, theme ) => {

	switch( style ){
		case "section-0":
			return {
				background: `linear-gradient(60deg, ${theme.palette.primary.main ?? "black"} 0%, #000 150%)`,
			    color: theme.palette.primary.contrastText ?? "black",   
			}
		case "section-1":
			return {
				background: `linear-gradient(60deg, ${theme.palette.primary.main  ?? "black"} 0%, rgba(85,85,85,1) 100%)`,
			    color: theme.palette.primary.contrastText ?? "black",   
			}
		case "section-2":
			return {
				background: 'linear-gradient(180deg, theme.pal 0%, rgba(255,245,245,1) 125%)',
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

export default LayoutSection;