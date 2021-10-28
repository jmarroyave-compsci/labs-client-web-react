export default {
	automata: {
		name: "stories_movies_award"
	},
	page: {
		title: "Award",
		url: ( { entity, award, year } ) => `/${entity}/stories/awards/${award}/${year}`,
	},
}