// Is it possible to nest async functions in JavaScript? Explain with
// examples.

// Yes, it is possible
// Tell the browser that this function is asynchronous
async function myFunc() {
    // Await for the promise to resolve
    await new Promise((resolve) => {
        setTimeout(() => {
            // Resolve the promise
            resolve(console.log('hello'));
        }, 3000);
    });
    // Once the promise gets resolved continue on
    console.log('hi');
}

// Call the function
myFunc();


async function eshan() {
        let delhiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })

        let bangaloreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        // delhiWeather.then(alert)
        // bangaloreWeather.then(alert)
        console.log("Fetching Delhi Weather Please wait ...")
        let delhiW = await delhiWeather
        console.log("Fetched Delhi Weather: " + delhiW)
        console.log("Fetching Bangalore Weather Please wait ...")
        let bangaloreW = await bangaloreWeather
        console.log("Fetched Bangalore Weather: " + bangaloreW)
        return [delhiW, bangaloreW]
}

const nishan = async () => {
        console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await eshan()
        let b = await nishan()

}
main1()