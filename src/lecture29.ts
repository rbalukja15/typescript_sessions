interface ILecture {
    name?: string;
    age?: Number;
}

interface IEmployee {
    name: string;
    age: Number;
}

type Lecture = {
    name: string;
    age: Number;
}

type Employee = {
    name?: string;
    age?: Number;
}

type Student = {
    name?: string;
    age?: Number;
}

type Union = Lecture & Employee & Student & IEmployee | ILecture;

class School implements Student, Employee {
    constructor() {

    }
}
