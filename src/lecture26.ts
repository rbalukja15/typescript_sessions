// Tuples
let myArray1: [Number, Number, string] = [10, 20, 'test'];
let tuple1: [Number, { name: string, address: string }] = [1, { name: 'test', address: ''}];

tuple1[0] = 2;
tuple1[1] = { name: 'test1', address: ''};

// Enums
enum Requests {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
}

enum User {
    Admin = 'Admin',
    Normal = 'Normal',
    Backoffice = 'Backoffice',
}

// Any
function f(data: any) {
    return data;
}

// Union
let union: string | Number | boolean | Array<Number>;
union = 'test';
union = 10;
union = true;
union = [1,2,3];

let unionTest: null | string;
unionTest = '12';

// Literal types
let test: 'Hello world!';

// Custom types
type Employee = {
    id: Number | string;
    name: string;
    age: Number;
    isDisabled: boolean | Number;
}

let employee1: Employee = {
    id: 1,
    name: 'John',
    age: 31,
    isDisabled: false
};

// Ushtrim 1
// 1 objects: Student
// Student -> studentId(number | string), name(string), surname(string), age(number), isEnrolled(boolean), grades(tuple with 3 numbers)
// Krijoni nje tuple of students(3), printoni notat per cdo student

type Student = {
    studentId: Number | string;
    name: string;
    age: Number;
    isEnrolled: boolean;
    grades: [Number, Number, Number];
}

let studentss: [Student, Student, Student] = [
    {
        studentId: 939412312,
        name: null,
        age: 31,
        isEnrolled: true,
        grades: [10, 10, 10]
    },
    {
        studentId: 939412312,
        name: 'Albioni',
        age: 31,
        isEnrolled: true,
        grades: [10, 10, 10]
    },
    {
        studentId: 939412312,
        name: 'Albioni',
        age: 31,
        isEnrolled: true,
        grades: [10, 10, 10]
    }
]
