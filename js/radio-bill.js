// get a reference to the sms or call radio buttons
//get a reference to the add button
var radioButton = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill
var radioCalls = document.querySelector('.callTotalTwo')
var radioSms = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('.totalTwo')

var smsTotal = 0;
var callsTotal = 0;

//add an event listener for when the add button is pressed
radioButton.addEventListener('click', radioBill)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
var billItemType = checkedRadioBtn.value;

    if (billItemType === "call"){
      callsTotal += 2.75;
    }

    else if (billItemType === "sms"){
      smsTotal += 0.75;
    }

    radioCalls.innerHTML = (callsTotal).toFixed(2);
    radioSms.innerHTML = (smsTotal).toFixed(2);
    var currentTotal = callsTotal + smsTotal;
  }

    function styleTotalColor(){
  radioTotal.classList.remove('danger')
  radioTotal.classList.remove('warning')

  if (currentTotal >= 50){
    radioTotal.classList.add('danger')
  }
  else if (currentTotal >= 30 && currentTotal < 50){
    radioTotal.classList.add('warning')
  }
}
