export default {
	automata: {
		name: "stories_movies_awards"
	},
	page: {
		title: "Awards",
		description: "search and visualize the award's information from the Oscars, Golden Globes and Emmys",
		url: ( { entity } ) => `/${entity}/stories/awards`,
	},
	banner: {
		showData : true,
	}
}