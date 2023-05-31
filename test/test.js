describe("Testing the BusTravelCalculator", function(){
    it("should set the points input ", function(){
     let calculator = createBusTravelCalculator();
     const pointsInput = '10';
     calculator.setPointsInput(pointsInput);
     assert.strictEqual(calculator.pointsInput());
    })
    
    
    
    })