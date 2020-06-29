describe('The text input bill', function(){

  describe('set values', function(){
    it('should excute the call cost at R2.75', function(){
      let textInput = TextInputBill();

      textInput.callCost1(2.75);

      assert.equal(2.75, textInput.executedCall1());
    });

    it(' should excute the sms cost at R0.75', function(){
      let textInput = TextInputBill();

      textInput.smsCost1(0.75)

      assert.equal(0.75, textInput.executedSms1());
    });

    it('should excute the total of calls and smses combined', function(){
      let textInput = TextInputBill();

      textInput.callCost1(2.75);
      textInput.smsCost1(0.75)

      assert.equal(2.75, textInput.executedCall1());
      assert.equal(0.75, textInput.executedSms1());
  });
});

describe('use values', function(){
  it('should execute the correct total if 2 calls are made', function(){
    let textInput = TextInputBill();

    textInput.callCost1(2.75);
    textInput.smsCost1(0.75)

    textInput.executeCall1();
    textInput.executeCall1();

    assert.equal(2.75, textInput.executedCall1());
    assert.equal(0.75, textInput.executedSms1());
    assert.equal(5.5, textInput.executedTotal1());
  });

  it('should execute the correct total if 5 smses are send', function(){
    let textInput = TextInputBill();

    textInput.callCost1(2.75);
    textInput.smsCost1(0.75);

    textInput.executeSms1();
    textInput.executeSms1();
    textInput.executeSms1();
    textInput.executeSms1();
    textInput.executeSms1();

    assert.equal(2.75, textInput.executedCall1());
    assert.equal(0.75, textInput.executedSms1());
    assert.equal(3.75, textInput.executedTotal1());
  });

  it('should be orange if the total exceeds R30', function(){;
  let textInput = TextInputBill();

  textInput.executionOver3(30);

  assert.equal(30, textInput.execution3());
});

it('should be red if the total exceeds R50', function(){
  let textInput = TextInputBill();

  textInput.executionOver5(50);

  assert.equal(50, textInput.execution5());
});
});
});
