// NOW TO IMPORT THE USER CLASS YOUR GOING TO IMPORT 
import User, { printName as printUName, printAge } from '/user.js';

const newUser = new User('Leon', 23);

console.log(newUser);

printUName(newUser);