import quotes from './data.json'

export const getQuote = function( tag ){
	 var qs = quotes.filter( a => a.tags.includes(tag))
	 var i = Math.floor(Math.random() * qs.length)
	 //console.log(i, qs)
	 return qs[i];
}