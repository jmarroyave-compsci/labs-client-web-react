import React from 'react';
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';

import StoryAwards from 'com/pages/awards'
import StoryAbout from 'com/pages/about/banner'
import StoryMovies from 'com/pages/movies'
import StoryPeople from 'com/pages/people'
import StoryPodcasts from 'com/pages/podcasts'
import StoryTV from 'com/pages/tv-shows'
import StoryGames from 'com/pages/video-games'
import StoryRemakes from 'com/pages/remakes'
import StoryPodcastMusic from 'com/pages/podcast-music'
import StoryLog from 'com/pages/about-project-blog/banner'
import StoryMovieFestivals from 'com/pages/movies-festivals'
import StoryProfessions from 'com/pages/professions'

export default function Content( props ){
	const { data, blog } = props;

	return (
		<Stack>
			<Section className="section-3"><StoryRemakes/></Section>
			<Section className="section-1"><StoryProfessions/></Section>
			<Section className="section-0"><StoryAwards/></Section>
			<Section className="section-2"><StoryMovies/></Section>
			<Section className="section-0"><StoryPodcastMusic {...props}/></Section>
			<Section className="section-1"><StoryPodcasts {...props}/></Section>
			<Section className="section-3"><StoryLog data={blog}/></Section>
			<Section className="section-2"><StoryGames/></Section>
			<Section className="section-1"><StoryPeople/></Section>
			<Section className="section-0"><StoryMovieFestivals/></Section>
			<Section className="section-2"><StoryTV/></Section>
		</Stack>
	)
}
