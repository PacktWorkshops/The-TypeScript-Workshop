// string literal  
type Yes = "yes";
// number literal
type One = 1;
// process my literal 
function yesOne(yes: Yes, one: One ) {
    console.log(yes, one);
}

yesOne("yes", 1)