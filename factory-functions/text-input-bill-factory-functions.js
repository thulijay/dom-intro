function TextInputBill(){
  var calculatedCall1 = 2.75;
  var calculatedSms1 = 0.75;
  var execution23 = 30;
  var execution45 = 50;

  var calCallTotal1 = 0;
  var calSmsTotal1 = 0;

  function callCost1(callCal1){
    calculatedCall1 = callCal1;
  }

  function executedCall1(){
    return calculatedCall1;
  }

  function smsCost1(smsCal1){
    calculatedSms1 = smsCal1;
  }

  function executedSms1(){
    return calculatedSms1;
  }

  function executionOver3(executionThirty){
    execution23 = executionThirty;
  }

  function  execution3(){
    return execution23;
  }

  function executionOver5(executionFifty){
    execution45 = executionFifty;
  }

  function execution5(){
    return execution45;
  }

  function executeCall1(){
    calCallTotal1 += calculatedCall1;
  }

  function executeSms1(){
    calSmsTotal1 += calculatedSms1;
  }

  function executedTotal1(){
    return calCallTotal1 + calSmsTotal1;
  }

  function totalForCalls1(){
    return calCallTotal1;
  }

  function totalForSms1(){
    return calSmsTotal1;
  }

	return{
		executedCall1,
    callCost1,
    executedSms1,
    smsCost1,
    executionOver3,
    execution3,
    executionOver5,
    execution5,
    executeCall1,
    executeSms1,
    executedTotal1,
    totalForCalls1,
    totalForSms1,
  }
}
