export default {
	automata: {
		name: "story-topics"
	},
	page: {
		title: "Topics",
		description: "",
		url: ({entity, decade, genre}) => `/${entity}/stories/topics/${decade}/${genre}`,
	},
	banner: {
		showData : true,
		renderer: "marquee",
	}
}