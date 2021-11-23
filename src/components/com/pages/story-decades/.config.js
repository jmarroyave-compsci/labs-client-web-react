export default {
	automata: {
		name: "story-decades"
	},
	page: {
		title: "Decades",
		description: "",
		url: ({entity, decade}) => `/${entity}/stories/decades/${decade}`,
	},
	banner: {
		showData : true,
	}
}