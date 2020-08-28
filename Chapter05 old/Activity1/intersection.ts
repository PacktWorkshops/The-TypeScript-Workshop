// step 1
// create employee type
type Employee = {
    _id: number,
    FirstName: string,
    LastName: string,
    salary?: number
};
// step 1
// create supervisor type
type Supervisor = {
    /* supervisors may have employees so added an array of type Employee.
       Reuse of the Employee type shows the flexibility of the typing system
    **/
    employees: Employee[],
    department: string
};
// step 1
// create manager type
type Manager = {
    location: string,
    /* reuse of the Supervisor type **/
    supervisor: Supervisor[]
};
// step 2
// declare floorSupervisor intersecting Employee and Supervisor
const floorSupervisor: Employee & Supervisor  = {
    _id:1,
    FirstName: 'Mike',
    LastName: 'Wright',
    department: 'Shipping',
    employees: [
        {_id: 2, FirstName: 'Dan', LastName: 'theMan'}
    ]
};
// declare storeManager intersecting Employee and Manager
const storeManager: Employee & Manager = {
    _id:1,
    FirstName: 'Mark',
    LastName: 'Wills',
    location: '100 Willson Street',
    supervisor: [
        floorSupervisor
    ]
};
// console out the results
// step 3
console.log(floorSupervisor);
// step 4
console.log(storeManager);