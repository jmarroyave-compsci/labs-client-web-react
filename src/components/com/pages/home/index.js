import React from 'react';
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';

import StoryAwards from 'com/pages/awards'
import StoryAbout from 'com/pages/about/banner'
import StoryRemakes from 'com/pages/remakes'
import StoryPodcastMusic from 'com/pages/podcast-music'
import StoryLog from 'com/pages/about-project-blog/banner'
import StoryProfessions from 'com/pages/professions'

export default function Content( props ){
	const { data, blog } = props;

	return (
		<Stack>
			<Section className="section-1"><StoryAwards/></Section>
			<Section className="section-3"><StoryRemakes/></Section>
			<Section className="section-2"><StoryProfessions/></Section>
			<Section className="section-0"><StoryPodcastMusic {...props}/></Section>
			<Section className="section-3"><StoryLog data={blog}/></Section>
		</Stack>
	)
}
