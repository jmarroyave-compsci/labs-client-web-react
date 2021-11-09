export default {
	automata: {
		name: "stories_movies_award"
	},
	page: {
		title: "Award",
		url: ( { entity, id, year } ) => `/${entity}/stories/awards/${id}/${year}`,
	},
}