import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from 'app/state';
import Constants from 'app/config/constants'
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';
import StoryAwards from 'com/pages/awards/banner'
import StoryRemakes from 'com/pages/remakes/banner'
import StoryPodcastMusic from 'com/pages/podcast-music/banner'
import StoryLog from 'com/pages/about-project-blog/banner'
import StoryProfessions from 'com/pages/professions/banner'

export default function Content( props ){
	const dispatch = useDispatch();
	const { data, blog } = props;

	useEffect( () => {
		dispatch(setPage({
		  	breadcrumbs: props.breadcrumbs,
		}));
	}, [])

	return (
		<Stack>
			<Section className="section-1"><StoryAwards entity="movies" year={(Constants.LOCAL) ? 2005 : 2018 - (Math.floor(Math.random() * 50))}/></Section>
			<Section className="section-3"><StoryRemakes/></Section>
			<Section className="section-2"><StoryProfessions/></Section>
			<Section className="section-0"><StoryPodcastMusic {...props}/></Section>
			<Section className="section-3"><StoryLog data={blog}/></Section>
		</Stack>
	)
}
