import React from 'react';
import Footer from 'shared/globals/footer';

const FooterComponent = ( { params } ) => {	
	return (
		<Footer version={params.version} footerLinks={params.links} socialNetworksLinks={params.socialNetworks}/>
	)
}

export default FooterComponent