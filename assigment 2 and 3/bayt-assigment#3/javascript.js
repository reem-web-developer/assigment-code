// using provided sample object
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo3'
          }
        }
      }
    }
  }
};

var containsValue = contains(nestedObject, 'foo3');

function contains(obj, value) {
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const property = obj[key];

      if (typeof property === 'object') {
        if (contains(property, value)) {
          return true;
        }
      } else {
        if (property === value) {
          return true;
        }
      }
    }
  }

        // if the value not exist
  return false;
}


console.log(containsValue); // true