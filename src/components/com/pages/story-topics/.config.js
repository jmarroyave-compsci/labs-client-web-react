export default {
	automata: {
		name: "story-topics"
	},
	page: {
		title: "Topics",
		description: "",
		url: ({entity, decade, genre, page}) => `/${entity}/stories/topics?decade=${decade}&genre=${genre}&page=${page}`,
	},
	banner: {
		showData : true,
		renderer: "marquee",
	}
}