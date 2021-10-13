import React from 'react';
import Constants from 'config/constants'
import Footer from 'shared/globals/footer';

export default function FooterComponent( { params } ){	
	return (
		<Footer version={params.version} footerLinks={params.links} socialNetworksLinks={params.socialNetworks}/>
	)
}