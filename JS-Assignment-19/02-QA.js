// 2. Write a sleep function using a promise in javascript?

async function loadData(){
    console.log("loading...");
    await sleep(2);
    console.log("Hey! I'm loaded")
}

async function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve, seconds*1000));
}

loadData();

