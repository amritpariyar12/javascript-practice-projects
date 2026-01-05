// | Topic                    | Practice Tasks                                |
// | ------------------------ | --------------------------------------------- |
// | `DOM Manipulation`       | Create a counter with + / - buttons           |
// | `Event Handling`         | Make a to-do list that adds and removes items |
// | `Functions & Scope`      | Build a calculator (add, subtract, etc.)      |
// | `Array & Object`         | Filter a list of users by name or age         |
// | `setTimeout/Interval`    | Create a digital clock or countdown timer     |
// | `fetch()`                | Load random quotes or jokes from a public API |
// | `Promises / Async-Await` | Simulate fetching user data from a server     |
// | `Local Storage`          | Save a dark/light theme toggle preference     |

//  Beginner Projects (JS + DOM)
// Color Changer App
// Randomly change background color on button click.

// To-Do List App
// Add/remove items, persist using localStorage.

// BMI Calculator
// Take weight and height input, show BMI result.

// Image Slider
// Change images on button click or auto-play with setInterval.

// 🔄 Intermediate Projects (API, Async, Forms)
// Weather App (using fetch)
// Get real-time weather from OpenWeather API.

// Form Validator
// Validate email/password fields on submit.

// Typing Speed Game
// Calculate how fast user types given sentence.

// Quiz App
// Multiple choice questions, score tracker, timer.


// 1. Create an array of your favorite movies and print each using forEach().
// let favMovies = ["Forensic", "Ratsasan","The call", "Trap"];
// console.log(favMovies[0]);
// favMovies.forEach(movie => {
//     console.log("Favourite Movies: ",favMovies);
// });

// 2. Add/remove items using push, pop, shift, and unshift.
// favMovies.push("3-Idiots");
// console.log(favMovies);
// favMovies.pop();
// console.log(favMovies);
// favMovies.shift();
// console.log(favMovies);
// favMovies.unshift("Psychopathic killer","Tare zameen par");
// console.log(favMovies);

// 3. Try slice() and splice() to modify arrays.
// let arr = ["a", "b","c","d","e","f"];
// let sliced = arr.slice(1,5);
// console.log(sliced);
// arr.splice(1,0,"amrit");
// console.log(arr);


//PRACTICE: OBJECTS
// 1. Create a book object with title, author, and pages.
// 2. Write a method describe() to return info about the book.
// let book = {
//     title: "JavaScript",
//     author: "Brendan Eich",
//     pages: 500,
//     describe: function(){
//         console.log("You will learn JavaScript through this book.");
//     }
// };
// 3. Try accessing values using . and [].
// console.log(book.title, book.author);
// book.describe();
// console.log(book["title"]);


// Create an object representing a student (name, age, course).
// Add a new property (e.g., grade).
// Loop through all properties using for...in.

// let student = {
//     name: "Amrit",
//     age: 21,
//     course: "BICTE"
// };
// console.log(student);
// student.grade = "7th sem";
// console.log(student);
// for(const key in student){
//     console.log(`${key} : ${student[key]}`);
// }

// Create an array of multiple students (objects) and find one with a certain name.
const students = [
  { name: "Amrit", age: 21, grade: "A" },
  { name: "Sita", age: 20, grade: "B" },
  { name: "Hari", age: 22, grade: "C" },
  { name: "Gita", age: 19, grade: "A" }
];

function findStudentByName(name){
    const student = students.find((s) => s.name.toLowerCase() === name.toLowerCase());
    if (student){
        console.log("Student Found: ", student);
    }else{
        console.log("Student Not Found");
    }

}
findStudentByName("Hari");