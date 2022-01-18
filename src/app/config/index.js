import _package_ from 'package.json';

const Constants = {
	TEST: (process.env.TESTING === "true") ? true : false,
	DEBUG : process.env.NEXT_PUBLIC__DEBUG,
	LOCAL : process.env.NEXT_PUBLIC__LOCAL,
	APP : {
		BASE_PATH: process.env.NEXT_PUBLIC__BASE_PATH,
		SITE_URL: process.env.NEXT_PUBLIC__SITE_URL,
		VERSION : _package_.version,
		TITLE: process.env.NEXT_PUBLIC__TITLE,
		DESCRIPTION: process.env.NEXT_PUBLIC__DESCRIPTION,
		PAGE_TITLE: process.env.NEXT_PUBLIC__PAGE_TITLE,
		HOME_URL: `${process.env.NEXT_PUBLIC__SITE_URL}${process.env.NEXT_PUBLIC__BASE_PATH}`,
	},
	SERVERS: {
		DATA: process.env.NEXT_PUBLIC__SERVER, 
		WEB_SOCKETS: process.env.NEXT_PUBLIC__SERVER, 
		GRAPHQL :  `${process.env.NEXT_PUBLIC__SERVER}/${process.env.NEXT_PUBLIC__SERVER_API_VERSION}/graphql`,
	},
	DEFAULTS : {
		PAGING_PAGE_SIZE: 10,
		IMAGE_PLACEHOLDER: "/img/ph.jpg",
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
	SOCIAL_NETWORKS: {
		CARD : {
			TITLE : `${process.env.NEXT_PUBLIC__TITLE} v.${_package_.version}`,
			THUMBNAIL_TWITTER: `${process.env.NEXT_PUBLIC__BASE_PATH}${process.env.NEXT_PUBLIC__CARD_THUMBNAIL_TWITTER}`,
		},
		TWITTER: process.env.NEXT_PUBLIC__SOCIAL_NETWORKS_TWITTER,
	}
}

export default Constants;