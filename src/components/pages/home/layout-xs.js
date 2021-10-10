import React from 'react';
import Stack from '@mui/material/Stack';
import Section from 'core/ui/layout/section';

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

export default function PageComponent( props ){
	const { data, blog } = props;

	return (
		<Stack>
			<Section className="section-2"><StoryMovies {...props}/></Section>
			<Section className="section-0"><StoryPodcastMusic {...props}/></Section>
			<Section className="section-1"><StoryPodcasts {...props}/></Section>
			<Section className="section-3"><StoryGames {...props}/></Section>
			<Section className="section-0"><StoryRemakes {...props}/></Section>
			<Section className="section-1"><StoryPeople {...props}/></Section>
			<Section className="section-0"><StoryAwards year={2018 - (Math.floor(Math.random() * 10))}/></Section>
			<Section className="section-2"><StoryTV {...props}/></Section>
			<Section className="section-3"><StoryLog data={blog}/></Section>
		</Stack>
	)
}
