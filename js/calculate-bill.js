//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
const billStringField = document.querySelector(".billString");

// get a reference for the bill total total
const billTotalSpanElement = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
// total calculation for the bill
var calculateX = CalculatedBill();

  // round to two decimals
//var roundedBillTotal = CalculatedBill();
  //return roundedBillTotal;


// color for the totals
function styleTotalColor(roundedBillTotal){
  const currentTotal = Number(roundedBillTotal);
  billTotalSpanElement.classList.remove("danger");
  billTotalSpanElement.classList.remove("warning");

  if(currentTotal >= 30){
    //make the total red
    billTotalSpanElement.classList.add("danger");
  }
  else if(currentTotal >= 20 && currentTotal < 30){
    // make the total orange
    billTotalSpanElement.classList.add("warning");
  }
}

// when the button is clicked
function calculateBtnClicked(){
  var billString = billStringField.value;
  const roundedBillTotal = totalPhoneBill(billString);
  billTotalElement.innerHTML = roundedBillTotal;
  styleTotalColor(roundedBillTotal);
}

calculateBtn.addEventListener("click", calculateBtnClicked);

//link the function to a click event on the calculate button
