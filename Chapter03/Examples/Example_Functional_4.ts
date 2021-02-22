const customer = {id: 1234, name: 'Amalgamated Materials'}

const formatForPrint = ()=> {
  return `${customer.name} id: ${customer.id}`;
};

console.log(formatForPrint());
