import config from 'app/config'
import quotes from './data.json'

const noQoute = 	{ 
		"tags": [], "from": "The programmer", 
		"text":"THERE ARE NO QUOTES FOR THIS TAG"
	}

const testQuote = 	{ 
		"tags": [], "from": "The programmer", 
		"text":"THIS IS THE TEST QUOTE"
	}

export const getQuote = function( tag ){
	if(config.TEST) return testQuote;

	var tags = (tag.includes(",")) ? tag.split(",") : [tag];
	var t = tags[ Math.floor(Math.random() * tags.length) ]


	var qs = quotes.filter( a => a.tags.includes(t))
	var i = Math.floor(Math.random() * qs.length)


	return (qs.length > 0) ? qs[i] : noQoute;
}