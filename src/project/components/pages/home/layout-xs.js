import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import StoryPodcastMusic from 'components/pages/stories/podcast-music/banner'
import StoryMovieAwards from 'components/pages/stories/movie-awards/banner'

function PageComponent( props ){
	const { data } = props;
	return (
		<GridContainer className="page-module" fill>
			<GridItem fill>
				<Section className="section-0">
					<StoryPodcastMusic/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-0">
					<StoryMovieAwards/>
				</Section>
			</GridItem>
		</GridContainer>
	)
}

export default PageComponent;