//getter - specail method that makes a property readable
//setter - special method that makes a property writable
//validate and modify a value when reading/writing a property

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }
//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }
//   get area() {
//     return this._height * this._width;
//   }
// }
// const rectangle = new Rectangle(3, 4);
// rectangle.width = 34;
// rectangle.height = 21;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("firstname must be a non-empty string");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("lastname must be a non-empty string");
    }
  }
  set age(ageNew) {
    if (typeof ageNew === "number" && ageNew >= 0) {
      this._age = ageNew;
    } else {
      console.error("age must be a non-negative number");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return `${this._firstName}  ${this._lastName}`;
  }
  get age() {
    return this._age;
  }
}
const person = new Person("luke", "pizza", 34);
console.log(person.firstName);
console.log(person.fullName);
console.log(person.age);
