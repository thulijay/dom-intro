//Bill Type
var callType = document.querySelector('.callTotalSettings');
var smsType = document.querySelector('.smsTotalSettings');
var totalType = document.querySelector('.totalSettings');
var btnType = document.querySelector('.checkButton');

var callTotal3 = 0;
var smsTotal3 = 0;
var billTotal3 = 0;

//settings
 var callSettings = document.querySelector('.callCostSetting');
 var smsSettings = document.querySelector('.smsCostSetting');
 var warningSettings = document.querySelector('.warningLevelSetting');
 var criticalSettings = document.querySelector('.criticalLevelSetting');
 var btnSettings = document.querySelector('.updateSettings');

 var callCost1 = 0;
 var smsCost1 = 0;
 var warningLevel= 0;
 var criticalLevel = 0;

 function costSettings(){
   callCost1 = Number(callSettings.value);
   smsCost1 = Number(smsSettings.value);
   warningLevel = Number(warningSettings.value);
   criticalLevel = Number(criticalSettings.value);
   colorType();

 }

 function radioSettings(){
   var settingsRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");

if(settingsRadio){
  var billItemTypeWithSettings = settingsRadio.value;
   if(billTotal3 < criticalLevel){
     if(billItemTypeWithSettings === 'call'){
       billTotal3 += callCost1;
       callTotal3 += callCost1;
 }
 else if (billItemTypeWithSettings === 'sms'){
   billTotal3 += smsCost1;
   smsTotal3 += smsCost1;
 }
}
}
callType.innerHTML = callTotal3.toFixed(2);
smsType.innerHTML = smsTotal3.toFixed(2);
totalType.innerHTML = billTotal3.toFixed(2);

colorType();
}

function colorType(){
  totalType.classList.remove('warning');
  totalType.classList.remove('danger');

  if(billTotal3 >= warningLevel && billTotal3 < criticalLevel){
    totalType.classList.remove('danger');
    totalType.classList.add('warning');
}
else if(billTotal3 >= criticalLevel){
  totalType.classList.remove('warning');
  totalType.classList.add('danger');
}
}
btnType.addEventListener('click', radioSettings);
btnSettings.addEventListener('click', costSettings);



// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
