describe('The bill with the calculate factory function', function(){

  describe('set values', function(){
    it('should excute the call cost', function(){
      let calculateBill = CalculatedBill();

      calculateBill.callCost(2.75);

      assert.equal(2.75, calculateBill.executedCall());
  });

  it('should excute the sms cost', function(){
    let calculateBill = CalculatedBill();

    calculateBill.smsCost(0.75);
    assert.equal(0.75, calculateBill.executedSms());
});

it('should excute the call and sms cost at the same time', function(){
  let calculateBill = CalculatedBill();

  calculateBill.callCost(2.75);
  calculateBill.smsCost(0.75);

  assert.equal(2.75, calculateBill.executedCall());
  assert.equal(0.75, calculateBill.executedSms());
});
});

describe('use values', function(){
  it('should excute the correct total when 3 calls are made and 2 smses are sent', function (){

  let calculateBill = CalculatedBill()

  calculateBill.callCost(2.75);
  calculateBill.smsCost(0.75);

  calculateBill.executeCall();
  calculateBill.executeCall();
  calculateBill.executeCall();
  calculateBill.executeSms();
  calculateBill.executeSms();

  assert.equal(2.75, calculateBill.executedCall());
  assert.equal(calculateBill.executedTotal());
  assert.equal(0.75, calculateBill.executedSms());
});

  it('should excute the correct total when 4 calls are made and 4 smses are sent', function(){

  let calculateBill = CalculatedBill()

  calculateBill.callCost(2.75);
  calculateBill.smsCost(0.75);

  calculateBill.executeCall();
  calculateBill.executeCall();
  calculateBill.executeCall();
  calculateBill.executeCall();
  calculateBill.executeSms();
  calculateBill.executeSms();
  calculateBill.executeSms();
  calculateBill.executeSms();

  assert.equal(2.75, calculateBill.executedCall());
  assert.equal(calculateBill.executedTotal());
  assert.equal(0.75, calculateBill.executedSms());
});

it('should be orange if the total exceeds R30', function(){
  let calculateBill = CalculatedBill()

  calculateBill.executionOver30(30);

  assert.equal(30, calculateBill.execution30());
  });

  it('should be red if the total exceeds R50', function(){
    let calculateBill = CalculatedBill()

    calculateBill.executionOver50(50);

    assert.equal(50, calculateBill.execution50());
});
});
});
