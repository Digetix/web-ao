const select = document.getElementById("terms-of-payment");
			termDetails = document.getElementById("term-details");
			dateContract = document.getElementById("myDate");
			datePay = document.getElementById("date-pay");
			checkBox = document.getElementById("chkbx-without-install");
			saveActBtn = document.getElementById("buttons-act");
			saveContractBtn = document.getElementById("button-save-contract");
			priceContract = document.getElementById("price");
			pricePay = document.getElementById("price-pay-contract");
			pricePayAdd = document.getElementById("price-pay-contract-add");
			btnPrintContract = document.getElementById("button-print-contract");			
			btnPrintAct = document.getElementById("button-print-act");
			element = document.getElementById("index-contract");
		
let date = new Date();
		dayOfDate = date.getDate(); 
			if (dayOfDate<10) dayOfDate='0'+dayOfDate;
		month = date.getMonth()+1;
			if (month<10) month='0'+month;
		year = date.getFullYear();
dateContract.value = year+"-"+month+"-"+dayOfDate;

const addDays = (date, period) => {
	date.setDate(date.getDate() + period);
};

let dateAddPay = new Date();
addDays(dateAddPay, 3);
dayOfDatePay = dateAddPay.getDate(); 
			if (dayOfDatePay<10) dayOfDatePay='0'+dayOfDatePay;
		monthPay = dateAddPay.getMonth()+1;
			if (monthPay<10) monthPay='0'+monthPay;
		yearPay = dateAddPay.getFullYear();

function calcPayContract() {	
	pricePay.value = Math.ceil((priceContract.value / 100) * 80);
	pricePayAdd.value = priceContract.value - pricePay.value;	
};

priceContract.addEventListener("input", () => {
	calcPayContract();
});

select.addEventListener('change', function handleChange(event) {
	if (select.options[select.selectedIndex].value == 'value1') {
		termDetails.style.visibility = "hidden";
	} else {		
		if (priceContract.value === '0' || priceContract.value === '') {
			alert("Сумма заказа не указана!");
			select.value = 'value1';
		} else {
			termDetails.style.visibility = "visible";
			datePay.value = yearPay+"-"+monthPay+"-"+dayOfDatePay;
			calcPayContract();
		}		
	}
});

pricePay.addEventListener("input", () => {
	let pricePayInt = parseInt(pricePay.value);
	let priceContractInt = parseInt(priceContract.value);
	if (pricePayInt > priceContractInt) {
		alert("Сумма оплаты превышает сумму заказа!");
		calcPayContract();
	}	else {
		pricePayAdd.value = priceContractInt - pricePayInt;
	}	
});


function checkWithoutInstall() {
	if (checkBox.checked == true){
		saveActBtn.style.visibility = "hidden";
		btnPrintContract.textContent = 'Договор без монтажа';
	} else {
		saveActBtn.style.visibility = "visible";
		btnPrintContract.textContent = 'Договор';
	}
}






