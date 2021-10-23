import _package_ from 'package.json';

const Constants = {
	DEBUG : process.env.NEXT_PUBLIC__DEBUG,
	LOCAL : process.env.NEXT_PUBLIC__LOCAL,
	APP : {
		BASE_PATH: process.env.NEXT_PUBLIC__SITE_URL,
		SITE_URL: process.env.NEXT_PUBLIC__SITE_URL,
		VERSION : _package_.version,
		TITLE: process.env.NEXT_PUBLIC__TITLE,
		PAGE_TITLE: process.env.NEXT_PUBLIC__PAGE_TITLE
	},
	SERVERS: {
		DATA: process.env.NEXT_PUBLIC__DATA, 
		GRAPHQL :  process.env.NEXT_PUBLIC__DATA_GRAPHQL,
	},
	DEFAULTS : {
		PAGING_PAGE_SIZE: 10,
	},
	PLUGINS : {
		GOOGLE: {
			ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
			MAPS: process.env.NEXT_PUBLIC__GOOGLE_MAPS_KEY,
		},
	},
	FEATURES : {
		SEARCH : (process.env.NEXT_PUBLIC__FEATURE_SEARCH == "true"),
	},
}

export default Constants;