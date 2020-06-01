//@ts-check
/**
 * @param {number} num1
 * @param {number} num2
 */
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));

class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

let tom = new Person('1', 2);

var ranzhicheng = '帅逼';
