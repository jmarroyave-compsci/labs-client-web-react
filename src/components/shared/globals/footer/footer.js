import React from 'react';
import FooterLinks from 'shared/globals/footer_links';
import SocialNetworks from 'shared/globals/social_networks';
import Version from 'shared/globals/version'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import CoreProxy from 'core/ui/layout/proxy';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Footer = ( {socialNetworksLinks, footerLinks, version} ) => {
	const theme = useTheme();
	const renderSection = (socialNetworksLinks, footerLinks, version, padding) => {
		return (
			<Box sx={{ padding: {
				xs: "2rem",
				sm: "2.5rem",
				md: "4rem",
				lg: "5rem",			
				},
				backgroundColor: `${theme.palette.primary.main}`, 
				color: `${theme.palette.primary.contrastText}`
			}}>
				<GridContainer spacing={0} fill>
					<GridItem xs={12} sm={12} md={8}>
						<FooterLinks links={footerLinks}/>
					</GridItem>					
					<GridItem center xs={12} sm={12} md={4} style={{margin : '1.5rem 0'}}>
						<SocialNetworks links={socialNetworksLinks}/>
						<Version version={version}/>
					</GridItem>
				</GridContainer> 
			</Box>
		)
	}

	return renderSection(socialNetworksLinks, footerLinks, version, '1.5rem')

}


export default Footer;

