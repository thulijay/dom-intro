function totalPhoneBill(billString){
  var billItems = billString.split(",");
  var billTotal = 0;

  for(var i = 0; i < billItems.length; i++){
    var billItem = billItems[i].trim();
    if(billItem === "call"){
      billTotal += 2.75;
    }
    else if(billItem === "sms"){
    //  calculateX.executeSms()
      billTotal += 0.75;
    }
  }
  return billTotal
}
