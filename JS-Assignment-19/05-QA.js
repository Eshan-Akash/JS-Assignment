/* Write a function delay that returns a promise. And that promise
should return a setTimeout that calls resolve after 1000ms.
*/

async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> resolve("done"), 1000)
    });
    let result = await promise;
    console.log(`success the rusult is ${result}`);
}

f();