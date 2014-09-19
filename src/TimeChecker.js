var date;
var hour;
var minute;

function TimeChecker(){
}

TimeChecker.prototype.yoTime = function() {
	var date = new Date
	var hour = date.getHours()
	var minute = date.getMinutes()
	if((hour + ":" + minute) == "9:30" || "14:30") return(true)
	
};