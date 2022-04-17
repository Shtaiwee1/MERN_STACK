const express = require("express");
const { faker } = require("@faker-js/faker");
//go to :https://github.com/faker-js/faker for more in depth documentation




// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:  faker.phone.phoneNumber(),
        lastName: faker.commerce.department()
        FirstName: faker.commerce.department()
        _id: faker.commerce.department()
    };
    return newFake;
};
    
//const newFakeProduct = createProduct();
//console.log(newFakeProduct);


const createCompany = () => {
    const newCompany = {
        name: faker.commerce.productName(),
        price: '$' + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
