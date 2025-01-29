class Person {
  constructor(name, age) {
    this._name = name; // Use _name instead of name
    this._age = age;   // Use _age instead of age
  }

  get name() {
    return this._name; // Getter for name
  }

  get age() {
    return this._age; // Getter for age
  }

  set age(value) {
    this._age = value; // Setter for age
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
