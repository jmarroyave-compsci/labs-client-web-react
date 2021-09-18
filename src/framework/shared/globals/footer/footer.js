import React from 'react';
import styled, { css } from 'styled-components'
import FooterLinks from 'shared/globals/footer_links';
import SocialNetworks from 'shared/globals/social_networks';
import Version from 'shared/globals/version'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import CoreProxy from 'core/ui/layout/proxy';
import { useTheme } from '@material-ui/core/styles';

const Footer = ( {socialNetworksLinks, footerLinks, version} ) => {
	const theme = useTheme();
	console.log("them ", theme);
	console.log("voy");

	const renderSection = (socialNetworksLinks, footerLinks, version, padding) => {
//style={{backgroundColor: theme.pallete.primary, color: theme.pallete.constrastText, padding: '1rem'}}
		return (
			<div >
				<GridContainer spacing={0} fill className="footer" style={{padding: padding}}>
					<GridItem fill>
						<FooterLinks links={footerLinks}/>
					</GridItem>					
					<GridItem fill center style={{paddingTop: '1rem'}}>
						<SocialNetworks links={socialNetworksLinks}/>
					</GridItem>
					<GridItem fill center>
						<Version version={version}/>
					</GridItem>
				</GridContainer> 
			</div>
		)
	}

	return (
		<CoreProxy 
			xs={renderSection(socialNetworksLinks, footerLinks, version, '1.5rem')}
			sm={renderSection(socialNetworksLinks, footerLinks, version, '2rem')}
			md={renderSection(socialNetworksLinks, footerLinks, version, '3rem')}
		/>
	)

}


export default Footer;

