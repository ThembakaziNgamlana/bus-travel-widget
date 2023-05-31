function createBusTravelCalculator() {
    let pointsInput;
    let startLocationSelect;
    let travelTimeRadios;
    let returnTripInput;
    let numTripsDisplay;
    let pricePerTripDisplay;
    let numReturnTripsDisplay;
    let costPerReturnTripDisplay;
  
    function setPointsInput(input) {
      pointsInput = input;
    }
  
    function setStartLocationSelect(select) {
      startLocationSelect = select;
    }
  
    function setTravelTimeRadios(radios) {
      travelTimeRadios = radios;
    }
  
    function setReturnTripInput(input) {
      returnTripInput = input;
    }
  
    function setNumTripsDisplay(display) {
      numTripsDisplay = display;
    }
  
    function setPricePerTripDisplay(display) {
      pricePerTripDisplay = display;
    }
  
    function setNumReturnTripsDisplay(display) {
      numReturnTripsDisplay = display;
    }
  
    function setCostPerReturnTripDisplay(display) {
      costPerReturnTripDisplay = display;
    }
  
  
  
    return {
      setPointsInput,
      setStartLocationSelect,
      setTravelTimeRadios,
      setReturnTripInput,
      setNumTripsDisplay,
      setPricePerTripDisplay,
      setNumReturnTripsDisplay,
      setCostPerReturnTripDisplay
      
    };
  }