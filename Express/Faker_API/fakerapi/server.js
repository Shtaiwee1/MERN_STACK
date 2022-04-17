const express = require("express");
const { faker } = require("@faker-js/faker");
//go to :https://github.com/faker-js/faker for more in depth documentation
const app = express();




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
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address:  {Street:faker.address.streetName(),
        City:  faker.address.cityName(),
        State: faker.address.state(),
        ZipCode: faker.address.zipCode(),
        Country: faker.address.country(),
    }
}
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
  });
  
  app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
  });

  app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    const newUser = createUser();
    res.json([newCompany , newUser]); //use an array to respond with multiple JSON elements
    //see this article:https://www.geeksforgeeks.org/express-js-res-json-function/
    
  });

  const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
    