// ANOTHER WAY OF EXPORTING CODING IS PLACING EXPORT FRONT OF CLASS USER AND OTHER METHODS

export default class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

// NOTE YOU CAN ONLY EXPORT DEFAULT ONE THING AND MOST OF THE TIME IT IS THE CLASS LIKE ABOVE

export function printName(user) { console.log(`Username is ${user.name}`); }

export function printAge(user) { console.log(`User age is ${user.age}`); }

/**
 * two ways to export 
 * one way is at the end of the file
 * Using export
 */

//  export default User
// OR
// export { printName, printAge }