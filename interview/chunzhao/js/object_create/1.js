const personProto = { greet() {return "hello"}}

const person = Object.create(personProto);

person.name = "Jane";
console.log(person,person.__proto__);
