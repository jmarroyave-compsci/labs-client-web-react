export default {
	automata: {
		name: "story-genre-timeline"
	},
	page: {
		title: "Genre timeline",
		description: "",
		url: ({entity, genre, page}) => `/${entity}/stories/genre-timeline?genre=${genre}&page=${page}`,
	},
	banner: {
		showData : true,
		renderer: "marquee",
	}
}