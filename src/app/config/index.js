import AppInfo from 'data/app/info' 
import Thumbnails from 'data/app/thumbnails' 
import SocialNetworks from 'data/app/social-networks' 

const Constants = {
	DEBUG : process.env.NEXT_PUBLIC__DEBUG,
	LOCAL : process.env.NEXT_PUBLIC__LOCAL,
	TEST: (process.env.NEXT_PUBLIC__TESTING === "true") ? true : false,
	APP : {
		BASE_PATH: process.env.NEXT_PUBLIC__BASE_PATH,
		SITE_URL: process.env.NEXT_PUBLIC__SITE_URL,
		VERSION : AppInfo.VERSION,
		TITLE: AppInfo.TITLE,
		DESCRIPTION: AppInfo.DESCRIPTION,
		PAGE_TITLE: AppInfo.PAGE_TITLE,
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
			TITLE : `${AppInfo.TITLE} ${AppInfo.version}`,
			THUMBNAIL_TWITTER: `${process.env.NEXT_PUBLIC__BASE_PATH}${Thumbnails.CARDS.LARGE}`,
		},
		TWITTER: SocialNetworks.twitter.user,
	}
}

export default Constants;