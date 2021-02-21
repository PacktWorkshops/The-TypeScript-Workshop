const numbers = ["One", "Two", "Three", "Four", "Five"];

setTimeout(function() {
    console.log(numbers[0]);
    setTimeout(function() {
        setTimeout(function() {
            console.log(numbers[2]);
            setTimeout(function() {
                console.log(numbers[3]);
                setTimeout(function() {
                    console.log(numbers[4]);
                }, 1000);
            }, 1000);
        }, 1000);
        console.log(numbers[1]);
    }, 1000);
}, 1000);