// get a reference to the sms or call radio buttons
var radioType = document.querySelector('.billItemTypeRadio')
//get a reference to the add button
var radioBtn = document.querySelector('.radioBillAddBt')
//create a variable that will keep track of the total bill
var radioCalls = document.querySelector('.callTotalTwo')
var radioSms = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('totalTwo')

var smsTotal = 0;
var callsTotal = 0;
<<<<<<< HEAD
var billTotal = 0;
=======
>>>>>>> cc904a4cec7d4de3fb0a2678e3cae6b7aed5c1a4
//add an event listener for when the add button is pressed
radioBtn.addEventListener('click', calculateBtnClicked)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItem = checkedRadioBtn.value

    if (billItem === "call"){
      billTotal += 2.75;
      callsTotal += 2.75;
    }

    else if (billItem === "sms"){
      billTotal += 0.75;
      smsTotal += 0.75
    }

  var roundedBillTotal = billTotal.toFixed(2);
<<<<<<< HEAD
  radioCalls.innerHTML = (callsTotal).toFixed(2);
  radioSms.innerHTML = (smsTotal).toFixed(2);
=======
  callT.innerHTML = (callsTotal).toFixed(2);
  smsT.innerHTML = (smsTotal).toFixed(2);
>>>>>>> cc904a4cec7d4de3fb0a2678e3cae6b7aed5c1a4

  return roundedBillTotal;
}

function styleTotalColor(roundedBillTotal){
  const currentTotal = Number(roundedBillTotal);

<<<<<<< HEAD
  radioTotal.classList.remove('danger')
  radioTotal.classList.remove('warning')

  if (currentTotal >= 50) {
    radioTotal.classList.add('danger')
  }
  else if (currentTotal >= 30 && currentTotal < 50){
    radioTotal.classList.add('warning')
  }
}
=======
  total.classList.remove('danger')
  total.classList.remove('warning')

  if (currentTotal >= 50) {
    total.classList.add('danger')
  }
  else if (currentTotal >= 30 && currentTotal < 50){
    total.classList.add('warning')
  }
}
function calculateBtnClicked(){
  var billString = type.value;
  const roundedBillTotal = totalPhoneBill(billString);

  total.innerHTML = roundedBillTotal;
  styleTotalColor(roundedBillTotal);
}
>>>>>>> cc904a4cec7d4de3fb0a2678e3cae6b7aed5c1a4
