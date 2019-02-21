// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length-2, array.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function(fare) {
    return num * fare;
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

const fetchSpecifiedDrivers = function(array, fn) {
  return fn(array);
}
