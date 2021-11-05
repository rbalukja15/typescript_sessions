abstract class Base {
    private _id: Number;
    public createdAt: Date;
    public modifiedAt: Date;

    abstract responseObject(value: string): void;
    abstract getSensitiveData(): string;
}

class User extends Base {
    public name: string;
    protected email: string;

    constructor(name: string, email: string) {
        super();
        this.name = name;
        this.email = email;
    }

    responseObject(value: string): void {
        console.log('This is the response: ', value);
    }

    getSensitiveData(): string {
        return this.email;
    }
}

class Doctor extends Base {
    public name: string;
    protected specializedField: string;

    constructor(name: string, specializedField: string) {
        super();
        this.name = name;
        this.specializedField = specializedField;
    }

    responseObject(value: string): void {
        console.log('This is the response: ', value);
    }

    getSensitiveData(): string {
        return this.specializedField;
    }
}

class Engineer extends User {
    public field: string;

    constructor(name: string, email: string, field: string) {
        super(name, email);
        this.field = field;
    }
}

class Teacher extends User {
    public subject: string;

    constructor(name: string, email: string, subject: string) {
        super(name, email);
        this.subject = subject;
    }
}

export { Engineer, Teacher };
