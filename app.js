const currentTime = () => {
var dayInMilliseconds = 1000 * 60;

let date = new Date(),
	dayOfDate = date.getDate();
	month = date.getMonth()+1;
	if (month < 10) {
		month = '0'+month;
	}
	year = date.getFullYear();
	
	document.getElementById("myDate").value = year+'-'+month+'-'+dayOfDate;
};
currentTime();
setInterval(currentTime, dayInMilliseconds);

