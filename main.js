/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(newFirstName = 'Anonymous', newLastName = 'Person', newAge, married = false)  {
  
    return {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge,
    married: married,

    goingOn: function() {
      return this.age + 1;
    },
    ageUp: function() {
      return this.age++
    },
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    marry: function(spouse) {
      this.married = true;
      spouse.married = true;
      this.spouseName = spouse.getFullName();
      spouse.spouseName = this.getFullName()
    },
    divorce: function(spouse) {
      this.married = false;
      spouse.married = false;
      delete this.spouseName;
      delete spouse.spouseName
    }
    }
  
  
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
