var timeChecker = new YoTimeChecker;



setInterval(function(){

	if (timeChecker.isYoTime()){
			setTimeout(function(){
		$.post('http://api.justyo.co/yoall/', {'api_token': myToken,
		// 'link': 'http://optional-link.com'
		}, function(response){}), 1000
		});
	}


}, 60000)