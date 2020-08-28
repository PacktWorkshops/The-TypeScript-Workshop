/* an index type is used to create a type of unknown 
number of properties but a known property type and value type
*/
//interface to define messages with flexibility
// alias IMessageType
type IMessageTypes = {
    [key: number ] : {type: string, content: string};
};

// declare an object variable with type IMessageType
const sysMessages: IMessageTypes = {
    1: {type: "sys", content: "welcome" },
    2: {type: "sys", content: "your access granted"},
    3: {type: "sys", content: "you will not pass"}
};

const chatMessages: IMessageTypes = {
    1: {type: "user", content: "Whats good"},
    2: {type: "user", content: "I am ok"},
    3: {type: "user", content: "Waffles Waffles Waffles !!!"}
};


// console log out results
console.log(sysMessages);
console.log(chatMessages);

//  an array of IMessageTypes
const myMessages: IMessageTypes[] = [
    sysMessages,
    chatMessages
];
// console out the results your array of index types
console.log(myMessages);