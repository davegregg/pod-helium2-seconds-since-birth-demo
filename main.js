// 1. Get current year, current month, and birth year
let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth()
let birthYear = prompt("What is your birth year?", 2000)

// 2. & 5. Calculate seconds in a year & seconds in a month
let secondsPerYear = 365 * 24 * 60 * 60      // let secondsPerYear = 31557600 // Source: https://en.wikipedia.org/wiki/Year
let secondsPerMonth = 30 * 24 * 60 * 60

// 3. Calculate the number of full years since birth
let fullYears = currentYear - birthYear - 1

// 4. Multiply full years by number of seconds in a year
let secondsUpToTheCurrentYear = fullYears * secondsPerYear // Up to December 31, 2020
let secondsSinceTheCurrentYear = currentMonth * secondsPerMonth // Since December 31, 2020

// 6. Sum the seconds to get our total
let totalEstimatedSeconds = secondsUpToTheCurrentYear + secondsSinceTheCurrentYear

// 7. Output in some way
let secondsInLocale = totalEstimatedSeconds.toLocaleString()

// let message = "<h2>Your birth year: "
//             + birthYear 
//             + "</h2>"

//     message += "<h2>And that is around " 
//             + secondsInLocale 
//             + " many seconds since your birth.</h2>"

let htmlOutput = `
    <h2>Your birth year: ${birthYear}</h2>
    <h2>And that is around ${secondsInLocale} many seconds since your birth.</h2>
`

document.write(htmlOutput)

// alert("WAHOOO!!")

let currentColor = "green" // "red", "orange", "yellow", etc.

if (currentColor === "blue" || currentColor === "green") {
    console.log(currentColor)
} else {
    console.log("nah")
}