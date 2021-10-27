import quotes from './data.json'

const noQoute = 	{ 
		"tags": [], "from": "The programmer", 
		"text":"THERE ARE NO QUOTES FOR THIS TAG"
	}


export const getQuote = function( tag ){
	 var qs = quotes.filter( a => a.tags.includes(tag))
	 var i = Math.floor(Math.random() * qs.length)


	 return (qs.length > 0) ? qs[i] : noQoute;
}