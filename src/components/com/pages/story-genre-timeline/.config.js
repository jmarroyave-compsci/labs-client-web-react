export default {
	automata: {
		name: "story-genre-timeline"
	},
	page: {
		title: "Genre timeline",
		description: "",
		url: ({entity, genre}) => `/${entity}/stories/genre-timeline/${genre}`,
	},
	banner: {
		showData : true,
		renderer: "marquee",
	}
}