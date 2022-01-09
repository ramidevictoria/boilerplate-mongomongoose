require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema;

let personSchema = new Schema({
  name: {type: 'String', required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let ramiDeVictoria = new Person({name: 'Rami De Victoria', age: 22, favoriteFoods: ['eggs' ,'fruits', 'vegetables']});

  ramiDeVictoria.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// createAndSavePerson(function(err, data) {
//   console.log(data);
// });

const arrayOfPeople = [
  {name: 'Un nombre', age: 38, favoriteFoods:['asdf', 'asdf', 'sdfg']},
  {name: 'Un nombre', age: 38, favoriteFoods:['asdf', 'asdf', 'sdfg']},
  {name: 'Un nombre', age: 38, favoriteFoods:['asdf', 'asdf', 'sdfg']}
];

const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    done(null, people);
  })
  
};

// createManyPeople(arrayOfPeople, function(err, data) {
//   console.log(data);
// });

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
