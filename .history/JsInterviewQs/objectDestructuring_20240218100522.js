Object destructuring is a feature in JavaScript that allows you to extract multiple properties from an object and assign them to variables in a more concise and readable way.

const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  // Providing default values
  const { firstName, lastName, age = 25 } = person;
  
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 25 (default value)
  