import home from './data/_home';
import topic from './data/_topic.json';
import trend from './data/_trend';
import view from './data/_view.json';
import info_timeline from './data/_timeline';
import info_microsoft from './data/_microsoft';

class Data{

	getCore(){
		return home;
	}

	getList(){
		return this.getCore().lists.topics.topTotal;
	}

	getList2(){
		var list = this.getInfoTimeline();
		return list.info;
	}

	getCoreTopicList(){
		return this.getCore().lists.topics.topTotal;
	}

	getHome(){
		return home;
	}

	getHomeDashboard(){
		return this.getHome().dashboard;
	}

	getHomeTrends(){
		return this.getHome().lists;
	}

	getTopic(){
		return topic;
	}

	getTopicInfo(){
		return this.getTopic().topic;
	}

	getTopicPulse(){
		return this.getTopic().topic;
	}

	getTopicHistory(){
		return this.getTopic().history;
	}

	getTopicRelated(){
		return this.getTopic().related;
	}

	getTopicStats(){
		return this.getTopic().topic;
	}

	getTrend(){
		return trend;
	}

	getView(){
		return view;
	}

	getInfoTimeline(){
		return info_timeline;
	}

	getInfoMicrosoft(){
		return info_microsoft;
	}
}

export default new Data();