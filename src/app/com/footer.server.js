import React from 'react';
import { useSelector } from 'react-redux';
import Footer from 'shared/globals/footer';

import config from 'app/config'
import { links } from 'data/app/links';
import socialNetworksLinks from 'data/app/social-networks'

const FooterComponent = ( { params } ) => {	
	const appState = useSelector(( state ) => state['app'] )

	return (
		<Footer version={config.APP.VERSION} footerLinks={links} socialNetworksLinks={socialNetworksLinks}/>
	)
}

export default FooterComponent