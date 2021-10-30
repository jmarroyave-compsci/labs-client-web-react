export default {
	automata: {
		name: "stories_awards"
	},
	page: {
		title: "Awards",
		description: "search and visualize the award's information from the Oscars, Golden Globes, Emmys and many more festivals across the world",
		url: ( { entity, year, page } ) => `/${entity}/stories/awards?year=${year}&page=${page}`,
	},
	banner: {
		showData : true,
	}
}