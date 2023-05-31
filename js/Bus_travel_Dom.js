// write  the reference od the Dom code
// Function to calculate the values
// Get the selected start location
// Get the travel time value (peak or off-peak)
// Get the input values and convert them to numbers
// Calculate the cost price per trip (single)
// Calculate the total number of trips she can take
// Find the selected destination
// Calculate the number of return trips she can make
// Calculate the cost per return trip
// Calculate the price for a trip based on travel time
// have the calculation function to the Calculate button
const pointsInput = document.querySelector('#boxCost');
const startLocationSelect = document.querySelector('.dropdown select');
const travelTimeRadios = document.querySelectorAll('.busTime');
const returnTripInput = document.querySelector('.return');
const numTripsDisplay = document.querySelector('#numTrips');
const pricePerTripDisplay = document.querySelector('#pricePerTrip');
const numReturnTripsDisplay = document.querySelector('#numReturnTrips');
const costPerReturnTripDisplay = document.querySelector('#costPerReturnTrip');

// create an instance
const busTravelCalculator = createBusTravelCalculator();

function calculateBusTravel() {
  const startLocation = startLocationSelect.value;

  let travelTime = '';
  for (let i = 0; i < travelTimeRadios.length; i++) {
    if (travelTimeRadios[i].checked) {
      travelTime = travelTimeRadios[i].value;
      break;
    }
  }
  
  busTravelCalculator.setPointsInput(pointsInput);
  busTravelCalculator.setStartLocationSelect(startLocationSelect);
  busTravelCalculator.setTravelTimeRadios(travelTimeRadios);
  busTravelCalculator.setReturnTripInput(returnTripInput);
  busTravelCalculator.setNumTripsDisplay(numTripsDisplay);
  busTravelCalculator.setPricePerTripDisplay(pricePerTripDisplay);
  busTravelCalculator.setNumReturnTripsDisplay(numReturnTripsDisplay);
  busTravelCalculator.setCostPerReturnTripDisplay(costPerReturnTripDisplay);

  const points = parseInt(pointsInput.value);
  const returnTripCount = parseInt(returnTripInput.value);

  const destinations = [
    { name: 'Khayelitsha', cost: 40, peakIncrease: 0.25 },
    { name: 'Parklands', cost: 25, peakIncrease: 0.25 },
    { name: 'CenturyCity', cost: 30, peakIncrease: 0.25 },
  ];

  let destination;
  for (let i = 0; i < destinations.length; i++) {
    if (destinations[i].name === startLocation) {
      destination = destinations[i];
      break;
    }
  }

  let costPerTrip;
  if (destination) {
    costPerTrip = destination.cost * (1 + destination.peakIncrease);
  } else {
    costPerTrip = 0;
  }

  let numTrips;
  if (costPerTrip !== undefined && costPerTrip !== 0) {
    numTrips = Math.floor(points / costPerTrip);
  } else {
    numTrips = 0;
  }

  let numReturnTrips;
  if (returnTripCount + 1 !== 0) {
    numReturnTrips = Math.floor(numTrips / (returnTripCount + 1));
  } else {
    numReturnTrips = 0;
  }

  let costPerReturnTrip;
  if (returnTripCount + 1 !== 0) {
    costPerReturnTrip = (costPerTrip * (returnTripCount + 1)).toFixed(2);
  } else {
    costPerReturnTrip = '';
  }

  let pricePerTrip;
  if (travelTime === 'peak') {
    pricePerTrip = costPerTrip.toFixed(2);
  } else {
    pricePerTrip = (costPerTrip * (1 - destination.peakIncrease)).toFixed(2);
  }

  numTripsDisplay.value = numTrips;
  pricePerTripDisplay.value = pricePerTrip;
  numReturnTripsDisplay.value = numReturnTrips;
  costPerReturnTripDisplay.value = costPerReturnTrip;

}

const calculateBtn = document.querySelector('.calcBtn');
calculateBtn.addEventListener('click', busTravelCalculator.calculateBusTravel);


