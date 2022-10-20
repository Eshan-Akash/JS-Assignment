/* Create a generator that can throw an exception. */
// Example 1
function* gen() {
    while(true){
        try {
            yield 42;
        } 
        catch(e) {
            console.log('Error caught!');
        }
    }
}
  
const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
console.log(g.throw(new Error('Something went wrong')));
// "Error caught!"
// { value: 42, done: false }

// Example 2
function* fnc() {
    while(true){
        try {
            yield "Null";
        }catch(e) {
            console.log('Generator.prototype.throw()');
        }
    }
}
   
const c = fnc();
console.log(c.next());
console.log(c.throw(new Error('Error caught!'))); 