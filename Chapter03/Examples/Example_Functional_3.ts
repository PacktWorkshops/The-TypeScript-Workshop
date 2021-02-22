const customer = {id: 1234, name: 'Amalgamated Materials'}

const formatForPrint = ()=> {
  customer.name = `${customer.name} id: ${customer.id}`;
};

formatForPrint();

console.log(customer.name);
