window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
//const promises = [];

// Function to generate a random time between 1 and 5 seconds
function generateRandomTime() {
return Math.floor(Math.random() * 5) + 1;
}

// Create 5 promises, each resolving after a random time between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
promises.push(new Promise(resolve => {
const time = generateRandomTime();
setTimeout(() => {
resolve(time);
}, time * 1000);
}));
}

// Use Promise.any() to wait for the first resolved promise and print its result to the output div
Promise.any(promises)
.then(result => {
document.getElementById('output').innerHTML = The first promise resolved after ${result} seconds.;
})
.catch(error => {
console.error('Error:', error);
});
