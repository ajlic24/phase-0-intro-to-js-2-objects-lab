// Write your solution in this file!
const employee = {
    name: `AJ`,
    streetAddress: `Home`
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value}; 
    //^^ is basically short-form of this:
    //const newEmployees = {...employee};
    //employee[key] = value;
    //return newEmployees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
//console.log(deleteFromEmployeeByKey(employee, `name`));
