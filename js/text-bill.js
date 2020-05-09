// get a reference to the textbox where the bill type is to be entered
var type = document.querySelector('.billTypeText');
//get a reference to the add button
var button = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callT = document.querySelector('.callTotalOne');
var smsT = document.querySelector('.smsTotalOne');
var total = document.querySelector('.totalOne');

var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
button.addEventListener('click', calculateBtnClicked);
//link the function to a click event on the calculate button
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function totalPhoneBill(billString) {
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
            callsTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
            smsTotal += 0.75
        }
    }

      //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    callT.innerHTML = (callsTotal).toFixed(2);
    smsT.innerHTML = (smsTotal).toFixed(2);


    return roundedBillTotal;

}


function styleTotalColor(roundedBillTotal){
    const currentTotal = Number(roundedBillTotal);

    total.classList.remove('danger')
    total.classList.remove('warning')

    if (currentTotal >= 50) {
        // make the total red
        total.classList.add('danger')
    } else if (currentTotal >= 30 && currentTotal < 50) {
        // make the total orange
        total.classList.add('warning')
    }

}

function calculateBtnClicked(){
    var billString = type.value;
    const roundedBillTotal = totalPhoneBill(billString);

    total.innerHTML = roundedBillTotal;
    styleTotalColor(roundedBillTotal);
}
