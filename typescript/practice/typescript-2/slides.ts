
// remember classes!
class Employee {
    // in typescript, we need to declare types for our
    // class variables
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }
}

let emp = new Employee(1, "Steve");

// class inheritance
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person {
    empCode: number;
    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }
    displayName(): void {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}

// abstract classes
abstract class Person1 {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    displayName(): void {
        console.log(this.name);
    }
    abstract displayCode(): void;
}

class Employee2 extends Person1 {
    empCode: number;
    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }
    displayCode(): void {
        console.log("Employee Code: " + this.empCode);
    }
}

// Shapes example:
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(private base: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}

// class data modifiers:
// public, private, protected...

/* 
    Encapsulating properties and methods with private access modifiers in classes offers several benefits in terms of code organization, 
    maintainability, and data integrity. Here are some of the key advantages:

    Encapsulation: Private properties and methods hide the internal implementation details of a class from external code. 
    This helps prevent unauthorized access or modification of critical data and behavior, 
    ensuring that the class's internal state remains consistent and valid.

    Data Integrity: By making properties private, you can enforce data validation and constraints within the class. 
    You have control over how data is accessed and modified, reducing the risk of invalid or inconsistent states.

    Abstraction: Private members allow you to expose a clean and abstract interface to external code while keeping the complex implementation 
    details hidden. This abstraction simplifies the usage of the class, making it easier for other developers to work with.

    Code Reusability: Private methods can be used internally by a class to implement common functionality. 
    This promotes code reusability because the same methods can be used across different parts of the class without 
    exposing them to the outside world.

    Maintenance and Refactoring: When you need to make changes to the internal logic of a class, having private 
    members allows you to do so without affecting external code that relies on the class's public interface. 
    This reduces the risk of breaking existing code during maintenance or refactoring.

    Security: Private properties and methods can help improve security by preventing unauthorized access to sensitive data or operations. 
    This is especially important when working on security-critical applications.

    Documentation: Private members indicate which parts of a class are meant for internal use only. 
    This helps in documenting the intended use of the class and guides other developers in understanding which parts should not be relied upon.

    Code Readability: Private members can improve code readability by reducing the surface area of the class's API. 
    This makes it easier for developers to understand and work with the class, as they don't need to be concerned with all the internal details.

    Testing: Private methods can be tested indirectly through the public methods of the class, 
    allowing you to focus on testing the class's external behavior while still ensuring the correctness of its internal logic.

    Versioning and Compatibility: When you need to make changes to a class, private members give you more flexibility 
    to evolve the class's implementation without breaking backward compatibility, as long as the public interface remains stable.

    In summary, using private properties and methods in classes promotes encapsulation, data integrity, and code organization. 
    It helps create more maintainable and robust code by clearly defining the boundaries between a class's public interface 
    and its internal implementation details.
*/

class Employee3 {
    // Private is only accessible within the class that defines it
    private empPin: number;
    empNum: number;
    empName: string;
    constructor(name: string, num: number, pin: number) {
        this.empName = name;
        this.empNum = num;
        this.empPin = pin;
    }
    private getEmpPin(): number {
        return this.empPin;
    }
    logPin(): void {
        console.log(this.getEmpPin());
    }
    getEmpNum(): number {
        return this.empNum;
    }
    getEmpName(): string {
        return this.empName;
    }
}

let emp1 = new Employee3("Steve", 1, 1234);
emp1.logPin();
//console.log(emp1.empPin) //This won't work, because empPin is private, therefore it can't be accessed outside of the class
console.log(emp1.empName)

// class data modifiers - protected
class Employee4{
    // Protected is only accessible within the class and its subclasses/child classes
    protected empCode: number;
    empName: string;
    private empPin: number;
    constructor(name: string, code: number, empPin: number){
        this.empName = name;
        this.empCode = code;
        this.empPin = empPin;
    }
    getEmpPin(): number{
        return this.empPin;
    }
}

class SalesEmployee extends Employee4{
    private department: string;
    constructor(name: string, code: number, empPin: number, department: string){
        super(name, code, empPin);
        this.department = department;
    }
    getEmpCode(): number{
        return this.empCode;
    }
    getEmpName(): string{
        return this.empName;
    }
    getDepartment(): string{
        return this.department;
    }
}

let emp2 = new SalesEmployee("John", 1, 1234, "Sales");
console.log(emp2.getEmpPin())
// console.log(emp2.empCode)

// read-only properties
class Employee5{
    readonly empCode: number;
    empName: string;
    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

let emp3 = new Employee5("John", 1);
// emp3.empCode = 2; //Compiler Error
console.log(emp3.empCode);

// static properties
class employee6{
    static empCode: number = 100;
    empName: string;
    constructor(name: string){
        this.empName = name;
    }
    static getEmpCode(): number{
        return this.empCode;
    }
    logEmpName(): void{
        console.log(this.empName);
    }
}

// static methods can be called without instantiating the class
let emp4 = new employee6("John");
emp4.logEmpName();
// console.log(emp4.getEmpCode())
console.log(employee6.getEmpCode())

// factory pattern:
class Car {

    make: string;
    model: string;

    constructor(make:string, model:string) {
        this.make = make;
        this.model = model;
    }
    // Static methods can only be called by the class itself, not by an instance of the class
    // static methods don't make it to the prototype of the class
    static createCar(make :string, model:string) {
        return new Car(make, model);
    }

    // non-static methods can only be called by instantiating the class, by an instance of the class
    createCar2(make :string, model:string) {
        return new Car(make, model);
    }
}

// factory pattern:
const myCar = Car.createCar("Toyota", "Camry");
// we can also create a new car like this:
const myCar2 = new Car("Toyota", "Camry");
console.dir(myCar);

myCar2.createCar2("Toyota2", "Camry2");

// interfaces
// interfaces are used to define the structure of an object
// they can also be used to define the structure of a function

interface IEmployee {
    empSalary: number;
    empName: string;
    setSalary(salary:number):void;
    getName(empName:string): string;
    getSalary(empSalary:number): number;
}

class IEmployee1 implements IEmployee{
    empSalary: number;
    empName: string;
    constructor(code: number, name: string){
        this.empSalary = code;
        this.empName = name;
    }
    setSalary(empSalary: number): void{
        this.empSalary = empSalary;
        console.log('Salary changed to: ' + this.empSalary)
    }
    getSalary(empSalary: number): number{
        return this.empSalary;
    }
    getName(empName: string): string{
        return "John";
    }
    // this is a method that is not defined in the interface
    // we can add things to classes that implement interfaces, 
    // but we can't add things to interfaces that we aren't including in our classes
    logEverything(): void{
        console.log(this.empName)
        console.log(this.empSalary)
    }
}
const dude = new IEmployee1(1, "John");
dude.getSalary(1)
console.dir(dude)

// interfaces and type aliases can be used to define the structure of data
// the differences between interfaces and type aliases are:
// 1. interfaces can be implemented by classes, type aliases can't
// 2. interfaces can be extended, type aliases can't
// 3. interfaces can be merged, type aliases can't

// interfaces:
interface Person2{
    name: string
}

const james: Person2 = {
    name: "John"
}

// type aliases:
type Person3 = {
    name: string
}

const jim: Person3 = {
    name: "John"
}

// interface merging:
interface Point{
    x: number
}
interface Point{
    y: number
}

const point: Point = {
    x: 1,
    y: 2
}

console.log(point)


// trying this with a type:
type Point1 = {
    x: number
}

type Point2 = {
    y: number
}

type Point1_2 = Point1 & Point2
// type Point1_2{x:number, y:number}

// Classes can implement more than one interface
// however classes can only extend one class
interface ColorInterface {
    color: { r: number; g: number; b: number };
}

interface ShapeInterface {
    area: number;
}

class ParentClass {
    name: string
    constructor(name: string){
        this.name = name
    }
}

// extending a parent class and implementing multiple interfaces!
// EXTEND BEFORE IMPLEMENTING!
class Square extends ParentClass implements ColorInterface, ShapeInterface {
    color: { r: number; g: number; b: number };
    area: number;

    constructor(color: { r: number; g: number; b: number }, area: number, name:string) {
        super(name)
        this.color = color;
        this.area = area;
    }
}

// interfaces as a function type
interface numKey{
    (key: number, value:string): void
}

function addKeyVal(key: number, value: string): void{
    console.log(key, value)
}

function updateKeyVal(key: number, value: string): void{
    console.log("updating key value"+ key, value)
}

let kvp: numKey = addKeyVal;
kvp(1, "John");
kvp = updateKeyVal;
kvp(1, "John");
