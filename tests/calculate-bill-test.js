describe('The bill with the calculate factory function', function(){

  it('should excute the correct total when 3 calls are made and 2 smses are sent', function (){
    assert.equal(9.75, totalPhoneBill('sms,call,call,sms,call'))
  });
});
