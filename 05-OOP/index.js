/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
  const output = {}
  output.name = name
  output.age = age
  return output
}

const vicky = makePerson('Vicky', 24)

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name) // -> Logs 'Vicky'
// console.log(vicky.age) // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
  greet: () => console.log('hello')
}

// /********* Uncomment this line to test your work! *********/
// personStore.greet() // -> Logs 'hello'

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
  const output = Object.create(personStore)
  output.name = name
  output.age = age
  return output
}

const sandra = personFromPersonStore('Sandra', 26)

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name) // -> Logs 'Sandra'
// console.log(sandra.age) //-> Logs 26
// sandra.greet() //-> Logs 'hello'

/*** CHALLENGE 4 ***/

sandra.introduce = function (name) {
  console.log(`Hi, my name is ${this.name}`)
}

// sandra.introduce() // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
  this.greet = () => console.log('hello')
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor()
// simon.greet() // -> Logs 'hello'

// mike.introduce logs 'Hi, my name si undefined'

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
  const output = new PersonConstructor(name, age)
  output.name = name
  output.age = age
  return output
}

const mike = personFromConstructor('Mike', 30)

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name) // -> Logs 'Mike'
// console.log(mike.age) //-> Logs 30
// mike.greet() //-> Logs 'hello'

/*** CHALLENGE 7 ***/
PersonConstructor.prototype.introduce = function () {
  return console.log(`Hi, my name is ${this.name}`)
}

// mike.introduce() // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log('hello')
  }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass()
// george.greet() // -> Logs 'hello'

/*** CHALLENGE 9 ***/

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  introduce() {
    console.log(`Hello World, my name is ${this.name}`)
  }
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32)
// console.log(thai.name) // -> Logs 'Thai'
// thai.introduce() //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/
const userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type)
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore)
  user.type = 'User'
  user.name = name
  user.score = score
  return user
}

/*** CHALLENGE 10 ***/
const adminFunctionStore = Object.create(userFunctionStore)

/*** CHALLENGE 11, 12, 13 ***/
function adminFactory(name, score) {
  const admin = userFactory(name, score)
  admin.type = 'Admin'
  Object.setPrototypeOf(admin, adminFunctionStore)
  return admin
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function () {
  console.log('Welcome users!')
}

const adminFromFactory = adminFactory('Eva', 5)

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/
// Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance. For this challenge, complete the missing code, giving all of the robotMixin properties to robotFido. Do this in a single line of code, without adding the properties individually.
class Dog {
  constructor() {
    this.legs = 4
  }
  speak() {
    console.log('Woof!')
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`)
  }
}

let robotFido = new Dog()

robotFido = Object.assign(robotFido, robotMixin)

// /********* Uncomment to test your work! *********/
robotFido.speak() // -> Logs "I am made of metal"
