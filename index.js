const returnFirstTwoDrivers =
  drivers => [drivers[0], drivers[1]]

const returnLastTwoDrivers =
  drivers => [drivers[drivers.length - 2], drivers[drivers.length - 1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return fare => fare * multiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers (drivers, driversSelector) {
  return driversSelector(drivers)
}
