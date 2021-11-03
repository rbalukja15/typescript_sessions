import classes from "./lecture30";

const driver = new classes.Driver('John', 123456, 27, 'Smith');

console.log(driver.getLicenseId)


// Employee
// name, surname, age(protected), salary(private), insuranceNr(private), amountEarned(private)
// Implementoni klasen
// Krijoni nje funksion, ku jepet si parameter nr i diteve te punuara ne muaj dhe rroga ditore
// Kalkuloni pagen qe punonjesi do te marre ne muaj dhe bejeni assign tek amountEarned
// Beni log amountEarned

const employee = new classes.Employee('Antonio', 'Conte', 50, 10000, 12345678);
employee.calculateAmountEarned(20, 50000);
console.log(employee.getAmountEarned);
