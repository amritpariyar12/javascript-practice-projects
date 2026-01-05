// 1. setTimeout: Runs a function once after delay
// setTimeout(() => {
//     console.log("This runs after 3 sec");
// }, 3000);

// 2. setInterval: Runs a function again and again
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log("count:", count);

//     if(count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);


// 3. Show a message "Loading..." after 2 seconds using setTimeout.
// setTimeout(() => {
//     console.log("Loading...")
// }, 2000);

// // 4. Create a digital counter that increases every second.
// let count = 0;
// const digitalCounter = setInterval(() => {
//     count++;
//     console.log("Digital Counter: ", count);

//     //Stop the counter at 10 using clearInterval.
//     if (count === 10) {
//         clearInterval(digitalCounter);
//     }
// }, 1000);


// 1. Promises / Async-Await
// Task: Simulate fetching user data from a server using a Promise and async/await.
// function getUserData() {  //// Simulated "fake" server fetch using a Promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = {
//                 id: 1,
//                 name: "Amrit",
//                 email: "amrit@gmail.com"
//             };
//             resolve(user);  //Simulate successful fetch
//         }, 2000);
//     })
// }
// getUserData();
// async function displayUserData() { //Using async/await to consume the Promise
//     console.log("Fetching user data..");

//     try{
//         const user = await fetchUserData(); // Waits until the Promise resolves
//         console.log("User data received: ");
//         console.log("Name: ", user.name);
//         console.log("Email: ", user.email);
//     }catch(error){
//         console.log("Error: ", error);
//     }
// }
// displayUserData();
