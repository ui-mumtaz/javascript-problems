let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.hasOwnProperty.call(map, 'one'))
// → true
