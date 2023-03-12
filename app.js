const select = document.getElementById("terms-of-payment");
			termDetails = document.getElementById("term-details");
			dateContract = document.getElementById("myDate");
			datePay = document.getElementById("date-pay");
			checkBox = document.getElementById("chkbx-without-install");
			saveActBtn = document.getElementById("buttons-act");
			saveContractBtn = document.getElementById("btn-save-contract");
			priceContract = document.getElementById("price");
			pricePay = document.getElementById("price-pay-contract");
			pricePayAdd = document.getElementById("price-pay-contract-add");

let date = new Date();
		dayOfDate = date.getDate(); 
			if (dayOfDate<10) dayOfDate='0'+dayOfDate;
		month = date.getMonth()+1;
			if (month<10) month='0'+month;
		year = date.getFullYear();

dateContract.value = year+"-"+month+"-"+dayOfDate;

function calcPayContract() {
	pricePay.value = Math.ceil((priceContract.value / 100) * 80);
	pricePayAdd.value = priceContract.value - pricePay.value;
};

priceContract.addEventListener("input", () => {
	calcPayContract();
});

pricePay.addEventListener("input", () => {
	pricePayAdd.value = priceContract.value - pricePay.value;
});

select.addEventListener('change', function handleChange(event) {
	if (select.options[select.selectedIndex].value == 'value1') {
		termDetails.style.visibility = "hidden";
	} else {
		termDetails.style.visibility = "visible";
		datePay.value = dateContract.value; 
		calcPayContract();
	}
});

function myFunction() {
	if (checkBox.checked == true){
		saveActBtn.style.visibility = "hidden";
		saveContractBtn.textContent = 'Договор без монтажа';
	} else {
		saveActBtn.style.visibility = "visible";
		saveContractBtn.textContent = 'Договор';
	}
}






