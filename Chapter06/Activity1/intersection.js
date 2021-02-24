// declare floorSupervisor intersecting Employee and Supervisor
var floorSupervisor = {
    _id: 1,
    FirstName: 'Mike',
    LastName: 'Wright',
    department: 'Shipping',
    employees: [
        { _id: 2, FirstName: 'Dan', LastName: 'theMan' }
    ]
};
// declare storeManager intersecting Employee and Manager
var storeManager = {
    _id: 1,
    FirstName: 'Mark',
    LastName: 'Wills',
    location: '100 Willson Street',
    supervisor: [
        floorSupervisor
    ]
};
// console out the results
console.log(floorSupervisor);
console.log(storeManager);
