import React from 'react';
import styled, { css } from 'styled-components'
import FooterLinks from 'shared/globals/footer_links';
import SocialNetworks from 'shared/globals/social_networks';
import Version from 'shared/globals/version'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import CoreProxy from 'core/ui/layout/proxy';

const Container = styled.div`
    background: #333;
    background: linear-gradient(90deg, #333 0%, rgba(0,0,0,1) 100%);
    color: white;
    padding: 1rem;
`;

export default class Footer extends React.Component {
	render(){
		const {socialNetworksLinks, footerLinks, version} = this.props;
		return (
			<CoreProxy 
				xs={this.renderSection(socialNetworksLinks, footerLinks, version, '1.5rem')}
				sm={this.renderSection(socialNetworksLinks, footerLinks, version, '2rem')}
				md={this.renderSection(socialNetworksLinks, footerLinks, version, '3rem')}
			/>				
		);
	}

	renderSection(socialNetworksLinks, footerLinks, version, padding){
		return (
			<Container>
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
			</Container>
		)
	}

}