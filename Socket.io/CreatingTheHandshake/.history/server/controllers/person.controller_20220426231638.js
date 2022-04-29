const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createPerson = (req, res) => {
  const { name } = req.body;
  Person.create({
    name,
  })
    .then((person) => res.json(person))
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.getAllPersons = (req, res) => {
  Person.find({})
    .sort({ name: "asc" })
    .then((persons) => res.json(persons))
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.updatePerson = (req, res) => {
  const { id } = req.params;
  Person.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    { runValidators: true, new: true }
  )
    .then((updatedPerson) => res.json(updatedPerson))
    .catch((err) => res.status(400).send(err));
};

module.exports.getPerson = (req, res) => {
  const { id } = req.params;
  Person.findOne({
    _id: id,
  })
    .then((person) => res.json(person))
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.deletePerson = (req, res) => {
  const { id } = req.params;
  Person.deleteOne({
    _id: id,
  })
    .then((person) => res.json(person))
    .catch((err) => {
      res.status(400).send(err);
    });
};
