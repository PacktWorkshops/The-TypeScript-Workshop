console.log("Printed immediately");

setTimeout(function() {
    console.log("Printed after two second");
}, 2000);

setTimeout(function() {
    console.log("Printed after one second");
}, 1000);

