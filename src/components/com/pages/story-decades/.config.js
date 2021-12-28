export default {
	automata: {
		name: "story-decades"
	},
	page: {
		title: "Decades",
		description: "",
		url: ({entity, decade, page}) => `/${entity}/stories/decades?decade=${decade}&page=${page}`,
	},
	banner: {
		showData : true,
	}
}