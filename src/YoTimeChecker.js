var date;
var hour;
var minute;

function YoTimeChecker(){
}

YoTimeChecker.prototype.yoTime = function() {
	var date = new Date
	var hour = date.getHours()
	var minute = date.getMinutes()
	if((hour + ":" + minute) == "9:25" || (hour + ":" + minute) == "14:25") return(true)
	else return(false)
};

