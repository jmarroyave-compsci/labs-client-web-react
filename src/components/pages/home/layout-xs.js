import React from 'react';
import Stack from '@mui/material/Stack';
import Section from 'core/ui/layout/section';

import StoryAwards from 'components/stories/awards'
import StoryAbout from 'components/pages/about/banner'
import StoryMovies from 'components/stories/movies'
import StoryPeople from 'components/stories/people'
import StoryPodcasts from 'components/stories/podcasts'
import StoryTV from 'components/stories/tv-shows'
import StoryGames from 'components/stories/video-games'
import StoryRemakes from 'components/stories/remakes'
import StoryPodcastMusic from 'components/stories/podcast-music'
import StoryLog from 'components/pages/blog/index/banner'
import StoryMovieFestivals from 'components/stories/movies-festivals'

export default function PageComponent( props ){
	const { data, blog } = props;

	return (
		<Stack>
			<Section className="section-0"><StoryMovieFestivals {...props}/></Section>
			<Section className="section-2"><StoryMovies {...props}/></Section>
			<Section className="section-0"><StoryPodcastMusic {...props}/></Section>
			<Section className="section-1"><StoryPodcasts {...props}/></Section>
			<Section className="section-3"><StoryLog data={blog}/></Section>
			<Section className="section-2"><StoryGames {...props}/></Section>
			<Section className="section-0"><StoryRemakes/></Section>
			<Section className="section-1"><StoryPeople {...props}/></Section>
			<Section className="section-0"><StoryAwards/></Section>
			<Section className="section-2"><StoryTV {...props}/></Section>
		</Stack>
	)
}
