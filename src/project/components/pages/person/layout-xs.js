import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Dashboard from './dashboard';

function PageComponent( props ){
	const { data, loading } = props
	return (
		<GridContainer fill>
			<GridItem fill>
		 		<Dashboard data={(data) ? data.dashboard : null} {...props} />
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;