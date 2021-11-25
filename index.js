// // Write your solution in this file!
// const employee = {
//     name: `AJ`,
//     streetAddress: `Home`
// }
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return {...employee, [key]: value}; 
//     //^^ is basically short-form of this:
//     //const newEmployees = {...employee};
//     //employee[key] = value;
//     //return newEmployees;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value;
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// }
// //console.log(deleteFromEmployeeByKey(employee, `name`));

const employee = {
    name: 'AJ',
    streetAddress: 'Adams Farm'
}

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
    let newObj = {...obj, [key]: value};
    return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const deleteFromEmployeeByKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key];
    return obj;
}