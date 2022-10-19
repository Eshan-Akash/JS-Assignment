/* Create a functional iterator, with a next function. */

function *disp11()
{
    console.log("Hey");
    yield "first pause";
    console.log("How");
    yield "second pause";
    console.log("are");
    yield 10+20;
    console.log("You? ");  
}
let control = disp11();

console.log(control.next());
console.log(control.next());

// control.next();
// control.next();