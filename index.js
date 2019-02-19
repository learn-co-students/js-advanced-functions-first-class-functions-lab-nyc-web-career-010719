const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

function selectingDrivers() {};

selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// const fareQuintupler = createFareMultiplier(5);

function fetchSpecifiedDrivers(drivers, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  };
};
