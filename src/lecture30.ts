interface IDriver {
    name: string;
    licenseId: Number | string;
    age: Number;
}

class Driver {
    public name: string;
    private _licenseId: Number | string;
    protected age: Number;
    readonly surname;

    constructor(name: string, licenseId: Number, age: Number, surname: string) {
        this.name = name;
        this._licenseId = licenseId;
        this.age = age;
        this.surname = surname;
    }

    get getLicenseId() { return this._licenseId };
    set setLicenseId(value: Number) { this._licenseId = value};

    get getAge() { return this.age };
    set setAge(value: Number) { this.age = value };

    get getSurname(): string { return this.surname };
}

// Default export

// Named export
// export { Driver };

class Employee {
    public name: string;
    public surname: string;
    protected age: Number;
    private _salary: Number;
    private _insuranceNr: Number;
    private _amountEarned: Number = 0;

    constructor(name: string, surname: string, age: Number, salary: Number, insuranceNr: Number);
    constructor(name: string, surname: string, age: Number, salary: Number, insuranceNr: Number, amountEarned?: Number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this._salary = salary;
        this._insuranceNr = insuranceNr;
        this._amountEarned = amountEarned;
    }

    get getAge() { return this.age }
    set setAge(value: number) { this.age = value};

    get getSalary() { return this._salary }
    set setSalary(value: number) { this._salary = value};

    get getInsuranceNr() { return this._insuranceNr }
    set setInsuranceNr(value: number) { this._insuranceNr = value};

    get getAmountEarned() { return this._amountEarned }
    set setAmountEarned(value: number) { this._amountEarned = value};

    calculateAmountEarned(days: Number, dailyPayment: Number): void {
        // @ts-ignore
        this._amountEarned = days * dailyPayment;
    }
}

const classes = {
    Employee,
    Driver,
}

export default classes;
