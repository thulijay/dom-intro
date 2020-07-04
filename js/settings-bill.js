//Bill Type
const settingsX = BillWithSettings();

const callType = document.querySelector('.callTotalSettings');
const smsType = document.querySelector('.smsTotalSettings');
const totalType = document.querySelector('.totalSettings');
const btnType = document.querySelector('.updateSettings');

//Settings
const callSettings = document.querySelector('.callCostSetting');
const smsSettings = document.querySelector('.smsCostSetting');
const warningSettings = document.querySelector('.warningLevelSetting');
const criticalSettings = document.querySelector('.criticalLevelSetting');

const radioTypeItem = document.querySelector(".billItemTypeWithSettings");
const btnCheck = document.querySelector(".checkButton");

 function colorType(){
   totalType.classList.remove("danger");
   totalType.classList.remove("warning");
   totalType.classList.add(settingsX.theColors());
 }

 function costSettings(){
   settingsX.setCallCost(callSettings.value);
   settingsX.setSmsCost(smsSettings.value);
   settingsX.setWarningLevel(warningSettings.value);
   settingsX.setCriticalLevel(criticalSettings.value);
  colorType();
 }

function radioSettings(){
  var checkedRadioBtnTwo = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	var radioItemType = checkedRadioBtnTwo.value;

  settingsX.settingsBill(radioItemType);
	totalType.innerHTML = settingsX.getTotalCost();
	callType.innerHTML = settingsX.getTotalCallCost();
	smsType.innerHTML = settingsX.getTotalSmsCost();
	colorType();
}
btnType.addEventListener('click', costSettings);
btnCheck.addEventListener('click', radioSettings);
