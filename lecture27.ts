// Function return types
type StringOrNumber = {
    num: Number;
    str: string;
}

// Primitive return tupe
function stringType(str: string):  Number {
    return 10;
}

// Union return type
function unionType(str: StringOrNumber): StringOrNumber {
    return str;
}

// Void
function voidType(str: string): void {
    // return undefined;
    // return null;
    return ;
}

// Undefined
function undefinedType(str: string): undefined {
    // return undefined;
    // return null;
    return;
}

// Null
function nullType(str: string): null {
    // return null;
    // return undefined;
    return;
}

// Any
function anyType(str: string): any {
    // return str;
    // return 10;
    // return true;
    // return null;
    // return undefined;
    // return;
}

// Arrow functions
const x = (): string => {
  return 'test';
}

// Unknown
function unknownEx(data: unknown): string | never {
    if (typeof data === 'string') {
        return data.substring(0,1);
    }
    return neverEx('This is a no op');
}

// Never
function neverEx(message: string): never {
    throw new Error(message);
}

// Ushtrim
// Krijoni nje funksion qe merr si parameter data: unknown
// Beni check nqs data eshte e tipit [Student, Student, Student]
// Nqs po, kontrolloni per cdo element te tuple, nqs emri eshte string.
    // Nqs po, therrisni nje function qe merr si parameter
    // name: string dhe ben return emrin e formatuar ne upperCase
    // Nqs jo, therrisni function: never qe ben throw error duke kaluar
    // message perkates
// Nqs jo, therrisni function: never qe ben throw error duke kaluar
// message perkates
type Student = {
    studentId: Number | string;
    name: string | null | number;
    age: Number;
    isEnrolled: boolean;
    grades: [Number, Number, Number];
}

let STUDENTS: [Student, Student, Student] = [
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

function convertToUpper(name: string): string {
    return name.toUpperCase();
}

const loopData = (data: unknown): void => {
    if (Array.isArray(data)) {
        data.forEach((d) => {
            if (typeof d.name === 'string') {
                d.name = convertToUpper(d.name);
            } else {
                neverEx('Name is not of type string');
            }
        });
    }
    neverEx('Data is not of type Array');
}
