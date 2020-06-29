function BillWithSettings(){
  var theCallCost = 0;
	var theSmsCost = 0;
	var theWarningLevel = 0;
	var theCriticalLevel = 0;
  var callCostTotal = 0;
	var smsCostTotal = 0;

  function setCallCost(callCost){
    return theCallCost = callCost;
  }

  function getCallCost(){
    return theCallCost;
  }

  function setSmsCost(smsCost) {
		return theSmsCost = smsCost;
	}

	function getSmsCost(){
		return theSmsCost;
	}

  function setWarningLevel(warningLevel){
	return	theWarningLevel = warningLevel;
	}

  function getWarningLevel(){
		return theWarningLevel;
	}

  function setCriticalLevel(criticalLevel){
		return theCriticalLevel = criticalLevel;
	}

  function getCriticalLevel(){
		return theCriticalLevel;
	}

  function makeCall(){
		if(!hasReachedCriticalLevel()){
			callCostTotal += getCallCost();
    	}
    }

    function getTotalCost(){
      return parseFloat(getTotalCallCost() + getTotalSmsCost());
	}

  function getTotalCallCost(){
		return parseFloat(callCostTotal);
	}

  function getTotalSmsCost(){
		return parseFloat(smsCostTotal);
	}

  function sendSms(){
    if(!hasReachedCriticalLevel()){
			smsCostTotal += getSmsCost();
		}
	}
	function hasReachedCriticalLevel(){
		return getTotalCost() >= getCriticalLevel()
	}

	function totalClassName(){
		if(hasReachedCriticalLevel()){
			return "critical"
		}
		if( getTotalCallCost() >= getWarningLevel()){
			return "warning"
		}
	}
  return{
    setCallCost,
		getCallCost,
		setSmsCost,
		getSmsCost,
		setWarningLevel,
		getWarningLevel,
		setCriticalLevel,
		getCriticalLevel,
		makeCall,
		getTotalCost,
		getTotalCallCost,
		getTotalSmsCost,
		sendSms,
		totalClassName
	}
}
