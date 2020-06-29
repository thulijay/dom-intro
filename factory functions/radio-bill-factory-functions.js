function RadioBill(){
  var calculatedCall2 = 2.75;
  var calculatedSms2 = 0.75;
  var execution231 = 30;
  var execution451 = 50;

  var calCallTotal2 = 0;
  var calSmsTotal2 = 0;

  function callCost2(callCal2){
    calculatedCall2 = callCal2;
  }

  function executedCall2(){
    return calculatedCall2;
  }

  function smsCost2(smsCal2){
    calculatedSms2 = smsCal2;
  }

  function executedSms2(){
    return calculatedSms2;
  }

  function executionOver301(executionThirty2){
    execution231 = executionThirty2;
  }

  function  execution301(){
    return execution231;
  }

  function executionOver501(executionFifty2){
    execution451 = executionFifty2;
  }

  function execution501(){
    return execution451;
  }

  function executeCall2(){
    calCallTotal2 += calculatedCall2;
  }

  function executeSms2(){
    calSmsTotal2 += calculatedSms2;
  }

  function executedTotal2(){
    return calCallTotal2 + calSmsTotal2;
  }

  function totalForCalls2(){
    return calCallTotal2;
  }

  function totalForSms2(){
    return calSmsTotal2;
  }

	return{
		executedCall2,
    callCost2,
    executedSms2,
    smsCost2,
    executionOver301,
    execution301,
    executionOver501,
    execution501,
    executeCall2,
    executeSms2,
    executedTotal2,
    totalForCalls2,
    totalForSms2,
  }
}
