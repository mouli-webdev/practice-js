const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  // Providing default values
  const { firstName, lastName, age = 25 } = person;
  
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 25 (default value)
  