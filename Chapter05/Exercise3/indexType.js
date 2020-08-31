// declare an object variable with type IMessageType
var sysMessages = {
    1: { type: "sys", content: "welcome" },
    2: { type: "sys", content: "your access granted" },
    3: { type: "sys", content: "you will not pass" }
};
var chatMessages = {
    1: { type: "user", content: "Whats good" },
    2: { type: "user", content: "I am ok" },
    3: { type: "user", content: "Waffles Waffles Waffles !!!" }
};
// console log out results
console.log(sysMessages);
console.log(chatMessages);
//  an array of IMessageTypes
var myMessages = [
    sysMessages,
    chatMessages
];
// console out the results your array of index types
console.log(myMessages);
