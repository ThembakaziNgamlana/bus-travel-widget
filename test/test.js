describe("Testing the BusTravelCalculator", function() {
    it("should set the points input", function() {
      let calculator = createBusTravelCalculator();
      const pointsInput = '10';
      calculator.setPointsInput(pointsInput);
      assert.equal(calculator.pointsInput, pointsInput);
    });
  
    it("should set the start location", function() {
      let calculator = createBusTravelCalculator();
      const startLocationSelect = {};
      calculator.setStartLocationSelect(startLocationSelect);
      assert.equal(calculator.startLocationSelect, startLocationSelect);
    });
  
    it("should set the return trip", function() {
      let calculator = createBusTravelCalculator();
      const returnTripInput = {};
      calculator.setReturnTripInput(returnTripInput);
      assert.equal(calculator.returnTripInput, returnTripInput);
    });
  
    it("should set the num trips", function() {
      let calculator = createBusTravelCalculator();
      //const numTripsDisplay = {};
      calculator.setNumTripsDisplay(numTripsDisplay);
      assert.equal(calculator.numTripsDisplay, numTripsDisplay);
    });
  
    it("should set the price per trip", function() {
      let calculator = createBusTravelCalculator();
      const pricePerTripDisplay = {};
      calculator.setPricePerTripDisplay(pricePerTripDisplay);
      assert.equal(calculator.pricePerTripDisplay, pricePerTripDisplay);
    });
  
    it("should set the num return trips", function() {
      let calculator = createBusTravelCalculator();
      const numReturnTripsDisplay = {};
      calculator.setNumReturnTripsDisplay(numReturnTripsDisplay);
      assert.equal(calculator.numReturnTripsDisplay, numReturnTripsDisplay);
    });
  
    it("should set the cost per return trip", function() {
      let calculator = createBusTravelCalculator();
      const costPerReturnTripDisplay = {};
      calculator.setCostPerReturnTripDisplay(costPerReturnTripDisplay);
      assert.equal(calculator.costPerReturnTripDisplay, costPerReturnTripDisplay);
    });
  });