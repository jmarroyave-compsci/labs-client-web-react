class Links{
	getLinkToView(trendInfo, view){
		//return `${this.getLinkToTrend(trendInfo)}/view/${view}`;
		return `week/${view}`;
	}

	getLinkToTopic(trendInfo, topic){
		//return `${this.getLinkToTrend(trendInfo)}/topic/${encodeURIComponent(topic)}`;
		return `/topic/${encodeURIComponent(topic)}`;
	}

	getLinkToTrend(trendInfo){				
		if(!trendInfo) return '/';
		var id = (trendInfo) ? trendInfo.id : '';
		var date = (trendInfo) ? trendInfo.ini.substr(0,10) : '';
		return `/${id}/${date}`;
	}

}

export default new Links();