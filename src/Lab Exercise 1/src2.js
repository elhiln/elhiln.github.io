let aVehicles = ['car', '', 'motorbike', 'truck', 'train', 'moped'];
const fromIndex = aVehicles.indexOf('car');
const fromIndex2 = aVehicles.indexOf('train');

const toIndex = 4;
const toIndex2 = 1;

const element = aVehicles.splice(fromIndex, 1)[0];
console.log(element);

const element2 = aVehicles.splice(fromIndex, 4)[0];
console.log(element2);

aVehicles.splice(toIndex, toIndex2, 0, element, element2);

console.log(aVehicles);
