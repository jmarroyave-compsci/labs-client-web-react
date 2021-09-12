'use strict';

exports.init = function(id, articleId, readyCallback) {

    if (!id) {
        throw new Error('id is missing')
    }

    const vuukleScript = document.getElementById('vuukleScript');
    if (vuukleScript) {
        return;
    }

	var VUUKLE_CONFIG = {
		apiKey: id,
		articleId: articleId,
	};

	var d = document,
	s = d.createElement('script');
	s.id = "vuukleScript"
	s.src = 'https://cdn.vuukle.com/platform.js';
	s.async = true;
	s.setAttribute('crossorigin', '*');
	(d.head || d.body).appendChild(s);

    readyCallback
};


/*
<div id='vuukle-comments'></div> – Displays the main Vuukle comment system
<div id='vuukle-emote'></div> – Displays the Emotes widget for the page
<div id='vuukle-newsfeed'></div> – Displays the Newsfeed widget for the page
<div class='vuukle-powerbar'></div> – Displays the social media share buttons. Can be included multiple 
*/