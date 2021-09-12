import React from 'react';
import Constants from 'config/constants'
import SocialNetworksLinks from 'config/social-networks'
import links from 'config/footer-links';
import Footer from 'shared/globals/footer';

export default function FooterComponent(){	
	return (
		<Footer version={Constants.VERSION} footerLinks={links} socialNetworksLinks={SocialNetworksLinks}/>
	)
}