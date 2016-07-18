console.log('Starting tests');

function add(a, b) {
  return a + b;
}

function returnHello (name) {
  //andrew - Andrew
  if (!name || typeof name !== 'string') {
    name = '';
  }
  
  return "Hello " + name;
}

//toBe checks if two values are equal
  //toBe is passed the value you are expecting
expect(add(3, 5)).toBe(8);
expect(returnHello('Krystal')).toBe('Hello Krystal');
expect(returnHello()).toBe('Hello ');

//toBeA checks type 
  //toBeA is passed a string and the type you're looking for
expect(add(4, 5)).toBeA('number');
expect(returnHello('Krystal')).toBeA('string');


//Only runs if all tests have passed
console.log('All tests have passed');