import React from 'react';

import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import StoryAwards from 'components/pages/stories/awards/banner'
import StoryAbout from 'components/pages/about/banner'
import StoryMovies from 'components/pages/stories/movies/banner'
import StoryPeople from 'components/pages/stories/people/banner'
import StoryPodcasts from 'components/pages/stories/podcasts/banner'
import StoryTV from 'components/pages/stories/tv-shows/banner'
import StoryGames from 'components/pages/stories/games/banner'
import StoryRemakes from 'components/pages/stories/remakes/banner'
import StoryPodcastMusic from 'components/pages/stories/podcast-music/banner'
import StoryLog from 'components/pages/blog/index/banner'

function PageComponent( props ){
	const { data, blog } = props;
	return (
		<GridContainer className="page-module" fill>
			<GridItem fill>
				<Section className="section-1">
					<StoryMovies/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-3" rounded={false}>
					<StoryPodcastMusic/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-1">
					<StoryLog data={blog}/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-1">
					<StoryPodcasts/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-1">
					<StoryGames/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="setvction-0">
					<StoryPeople/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-2">
					<StoryAwards year={2018 - (Math.floor(Math.random() * 10))}/>
				</Section>
			</GridItem>
			<GridItem fill>
				<Section className="section-1">
					<StoryTV/>
				</Section>
			</GridItem>		
			<GridItem fill>
				<Section className="section-1">
					<StoryRemakes/>
				</Section>
			</GridItem>				
		</GridContainer>
	)
}

export default PageComponent;