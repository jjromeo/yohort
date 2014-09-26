var date;
var hour;
var minute;

function YoTimeChecker(){
}

YoTimeChecker.prototype.isYoTime = function() {
 if(this.isRightTime() && (!this.isWeekend())) return(true)
	else return(false)
};

YoTimeChecker.prototype.isWeekend = function() {
	var day = new Date().getDay()
	if (day == 6 || day == 0){
		return(true)
	}
	else{
		return(false)
	}
};

YoTimeChecker.prototype.isRightTime = function() {
	var date = new Date
	var hour = date.getHours()
	var minute = date.getMinutes()
	if((hour + ":" + minute ) == "9:25" || (hour + ":" + minute ) == "14:25"){
		return(true)
	}
};