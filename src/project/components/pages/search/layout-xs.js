import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Results from './results';

function PageComponent( props ){
	const { qry } = props
	return (
		<GridContainer className="page-module" fill>
			<GridItem xs={12} sm={12} md={12}>
			  <h1>Search results for: {qry}</h1>
			</GridItem>
			<GridItem fill>
		 		<Results {...props} />
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;