import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from 'app';
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';
import StoryAwards from 'com/pages/awards/banner'
import StoryRemakes from 'com/pages/story-remakes/banner'
import StoryPodcastMusic from 'com/pages/podcast-music/banner'
import StoryLog from 'com/pages/about-project-blog/banner'
import StoryProfessions from 'com/pages/professions/banner'
import StoryDashboards from 'com/pages/dashboards/banner'
import StoryDecade from 'com/pages/story-decades/banner'
import StoryTopics from 'com/pages/story-topics/banner'
import StoryGenreTimeline from 'com/pages/story-genre-timeline/banner'
import BottomSheetData from 'com/pages/dashboard/com/bottom-sheet-data';

export default function Content( props ){
	const dispatch = useDispatch();
	const { data, blog } = props;

	const random = ( max ) => Math.floor(Math.random() * max) + 1

	useEffect( () => {
		dispatch(setPage({
		  	breadcrumbs: props.breadcrumbs,
		}));
	}, [])

	return (
		<Stack>
			<Section className="section-2"><StoryGenreTimeline entity="movies" genre="action" /></Section>
			<Section className="section-3"><StoryTopics entity="movies" genre="comedy" decade={`${(new Date().getFullYear() - random(100)).toString().slice(0,3)}0`}/></Section>
			<Section className="section-0"><StoryDecade entity="movies" type="movie" decade={`${(new Date().getFullYear() - random(100)).toString().slice(0,3)}0`}/></Section>
			<Section className="section-1"><StoryProfessions/></Section>
			<Section className="section-2"><StoryRemakes entity="movies" page={random(10)} /></Section>
			<Section className="section-3"><StoryAwards entity="movies" year={2018 - random(50)}/></Section>
			<Section className="section-2"><StoryDashboards/></Section>
			<Section className="section-0"><StoryPodcastMusic page={random(10)}/></Section>
			<Section className="section-2"><StoryLog data={blog}/></Section>
		</Stack>
	)
}
