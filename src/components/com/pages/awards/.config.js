export default {
	automata: {
		name: "stories_movies_awards"
	},
	page: {
		title: "Awards",
		description: "search and visualize the award's information from the Oscars, Golden Globes and Emmys",
		url: ( { entity, year, page } ) => `/${entity}/stories/awards?year=${year}&page=${page}`,
	},
	banner: {
		showData : true,
	}
}