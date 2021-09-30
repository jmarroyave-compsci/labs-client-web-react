import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Results from './results';

function PageComponent( props ){
	return (
		<GridContainer className="page-module" fill style={{padding: '0 2rem'}}>
			<GridItem fill>
		 		<Results {...props} />
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;