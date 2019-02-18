const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(multiplier) {
        return num * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, whichDrivers) {
  return whichDrivers(drivers);
}
