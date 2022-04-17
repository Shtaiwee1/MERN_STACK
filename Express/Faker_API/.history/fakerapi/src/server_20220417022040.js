const express = require("express");
const { faker } = require("@faker-js/faker");
//go to :https://github.com/faker-js/faker for more in depth documentation




// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:  faker.phone.phoneNumber(),
        FirstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.datatype.number()
    };
    return newUser;
};
    
//const newFakeProduct = createProduct();
//console.log(newFakeProduct);


const createCompany = () => {
    const newCompany = new Company(
      faker.datatype.number(),
      faker.company.companyName(),
      {
        street: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      }
    );
    return newUser;
  };
