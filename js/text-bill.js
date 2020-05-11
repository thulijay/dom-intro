// get a reference to the textbox where the bill type is to be entered
var type = document.querySelector('.billTypeText');
//get a reference to the add button
var button = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callT = document.querySelector('.callTotalOne');
var smsT = document.querySelector('.smsTotalOne');
var total = document.querySelector('.totalOne');

var callsTotal1 = 0;
var smsTotal1 = 0;

//add an event listener for when the add button is pressed
button.addEventListener('click', calculateBtn);
//link the function to a click event on the calculate button
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBill(textBillTotal) {
    //split the string
    var textBillItems = textBillTotal.split(",");
    // a variable for the total phone bill.
    var billTotal1 = 0;
    //loop over all the bill items
    for (var i=0;i<textBillItems.length;i++){
        var textbillItem = textBillItems[i].trim();
        if (textbillItem === "call"){
            billTotal1 += 2.75;
            callsTotal1 += 2.75;
        }
        else if (textbillItem === "sms"){
            billTotal1 += 0.75;
            smsTotal1 += 0.75;
        }
    }

      //round to two decimals
    var roundedBill = billTotal1.toFixed(2);
    callT.innerHTML = (callsTotal1).toFixed(2);
    smsT.innerHTML = (smsTotal1).toFixed(2);

    return roundedBill;
}

function styleTotal(roundedBill){
    const currentTotal1 = Number(roundedBill);

    total.classList.remove('danger')
    total.classList.remove('warning')

    if (currentTotal1 >= 50) {
        // make the total red
        total.classList.add('danger')
    } else if (currentTotal1 >= 30 && currentTotal1 < 50) {
        // make the total orange
        total.classList.add('warning')
    }
}

function calculateBtn(){
    var textBillTotal = type.value;
    const roundedBill = textBill(textBillTotal);

    total.innerHTML = roundedBill;
    styleTotal(roundedBill);
}
