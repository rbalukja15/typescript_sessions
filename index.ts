const sum: Number = 0;

// Number type checking
let count: Number = 0;

// String type checking
let myName: string = 'test';
myName = '';

// Boolean type checking
let myBoolean: boolean = false;
myBoolean = true;

// Array type checking
const myArray: Number[] = [1,2,3];
const secondArray: Array<number> = [1,2,3];
const thirdArray: Array<string> = ['te', 'ststsas'];
const fourthArray: Array<boolean> = [true, false];

// Object type checking
const jsObject = { name: 'mario' };
const firstObject: { name: string, job: string, age: number } = { name: 'mario', job: 'developer', age: 31 };


// Ushtrim 1
// 1 objects: Student
// Student -> studentId(number), name(string), surname(string), age(number), isEnrolled(boolean), grades(array of numbers)
// Krijoni nje array of students(3), printoni notat per cdo student

const students: Array<{ studentId: number; name: string; age: number, isEnrolled: boolean, grades: Array<number> }> = [
    {
        studentId: 12345,
        name: 'Mario',
        age: 31,
        isEnrolled: true,
        grades: [10, 10, 10]
    },
    {
        studentId: 4359342,
        name: 'Aldo',
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
];

students.forEach((student) => {
    console.log(student.grades)
})
