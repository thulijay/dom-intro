// get a reference to the sms or call radio buttons
//get a reference to the add button
var radioButton = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill
var radioCalls = document.querySelector('.callTotalTwo')
var radioSms = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('.totalTwo')

var smsTotal2 = 0;
var callsTotal2 = 0;
var billTotal2 = 0;
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioX = RadioBill();

function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
var billItemType = checkedRadioBtn.value;

    if (billItemType === "call"){
      radioX.executeCall2();
      //billTotal2 += 2.75;
      //callsTotal2 += 2.75;
    }

    else if (billItemType === "sms"){
      //billTotal2 += 0.75;
      //smsTotal2 += 0.75;
      radioX.executeSms2();
    }

    radioCalls.innerHTML = (radioX.totalForCalls2()).toFixed(2);
    radioSms.innerHTML = (radioX.totalForSms2()).toFixed(2);
    //radioTotal.innerHTML = billTotal2.toFixed(2);
    radioTotal.innerHTML = radioX.executedTotal2().toFixed(2);

    styleColors();
  }

    function styleColors(){


  //radioTotal.classList.remove('danger')
  //radioTotal.classList.remove('warning')

  if (radioX.executedTotal2() >= 50){
    radioTotal.classList.add('danger')
  }
  else if (radioX.executedTotal2() >= 30 && radioX.executedTotal2() < 50){
    radioTotal.classList.add('warning')
  }
}
radioButton.addEventListener('click', radioBill)
