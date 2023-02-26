const select = document.getElementById('terms-of-payment');
const termDetails = document.getElementById('term-details');
const dateContract = document.getElementById("myDate");
const datePay = document.getElementById("date-pay");

let date = new Date(),
		dayOfDate = date.getDate(),
		month = date.getMonth()+1;
		year = date.getFullYear();

		if (month < 10) {
				month = '0'+month;
		}

dateContract.value = year+'-'+month+'-'+dayOfDate;

select.addEventListener('change', function handleChange(event) {
	if (select.options[select.selectedIndex].value == 'value1') {
		termDetails.style.visibility = "hidden";
	} else {
		termDetails.style.visibility = "visible";	
		datePay.value = year+'-'+month+'-'+dayOfDate;
	}
});







