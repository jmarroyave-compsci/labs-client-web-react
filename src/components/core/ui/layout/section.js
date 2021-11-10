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
	const currentColor = ( theme.palette.mode === "light" ) ? theme.palette.primary.light :  theme.palette.primary.dark;
	const _currentColor = ( theme.palette.mode === "dark" ) ? theme.palette.primary.light :  theme.palette.primary.dark;


	console.log(currentColor, _currentColor)
	switch( style ){
		case "section-0":
			return {
				background: `linear-gradient(60deg, ${theme.palette.primary.main} 75%, ${theme.palette.common.black} 150%)`,
			    color: theme.palette.primary.contrastText,   
			}
		case "section-1":
			return {
				background: `linear-gradient(60deg, ${theme.palette.primary.main} 5%, ${theme.palette.common.black} 100%)`,
			    color: theme.palette.primary.contrastText,   
			}
		case "section-dark":
			return {
				background: `linear-gradient(180deg, ${_currentColor} 0%, ${theme.palette.background.paper} 125%)`,
			    color: theme.palette.getContrastText(_currentColor),   
			}
		case "section-3":
			return {
				background: `linear-gradient(180deg, ${currentColor} 50%, ${theme.palette.common.white} 190%)`,
			    color: theme.palette.getContrastText(currentColor),   
			}
		default: 
			return {
				background: 'inherit',
			    color: 'inherit',   
			}
	}
}	

export default LayoutSection;