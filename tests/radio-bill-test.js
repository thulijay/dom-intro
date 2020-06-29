describe('The bill with the radio factory function', function (){

  describe('set values', function(){
    it('should be able to execute the call cost', function(){
      let radioIput = RadioBill();

      radioIput.callCost2(2.75);

      assert.equal(2.75, radioIput.executedCall2());
    });

    it('should be able to execute the sms cost', function(){
      let radioIput = RadioBill();

      radioIput.smsCost2(0.75);

      assert.equal(0.75, radioIput.executedSms2());
    });

    it('should be able to excute the call and smss cost at the same time', function(){
      let radioIput = RadioBill();

      radioIput.callCost2(2.75);
      radioIput.smsCost2(0.75);

      assert.equal(2.75, radioIput.executedCall2());
      assert.equal(0.75, radioIput.executedSms2());
    });

    describe('use values', function(){
      it('should execute R16,50 for 6 calls', function(){
      let radioIput = RadioBill();

      radioIput.callCost2(2.75);
      radioIput.smsCost2(0.75);

      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();


      assert.equal(2.75, radioIput.executedCall2());
      assert.equal(16.50, radioIput.executedTotal2());
      assert.equal(0.75, radioIput.executedSms2());
    });

    it('should execute R6 for 8 smses sent', function(){
      let radioIput = RadioBill();

      radioIput.callCost2(2.75);
      radioIput.smsCost2(0.75);

      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();

      assert.equal(2.75, radioIput.executedCall2());
      assert.equal(6.00, radioIput.executedTotal2());
      assert.equal(0.75, radioIput.executedSms2());
    });

    it('should execute R12,25 for the 7 calls made and 4 smses sent out', function(){
      let radioIput = RadioBill();

      radioIput.callCost2(2.75);
      radioIput.smsCost2(0.75);

      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeCall2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();
      radioIput.executeSms2();

      assert.equal(2.75, radioIput.executedCall2());
      assert.equal(22.25, radioIput.executedTotal2());
      assert.equal(0.75, radioIput.executedSms2());
      });

      it('should be orange if the total exceeds R30', function(){
        let radioIput = RadioBill();

        radioIput.executionOver301(30);

        assert.equal(30, radioIput.execution301());
        });

        it('should be red if the total exceeds R50', function(){
          let radioIput = RadioBill();

          radioIput.executionOver501(50);

          assert.equal(50, radioIput.execution501());
      });
      });
      });

});
