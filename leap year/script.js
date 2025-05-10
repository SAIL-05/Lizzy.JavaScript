
// write a programme that checks if a year is a leap year
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let year = parseInt(prompt("enter a year"));

if (!isNaN(year)){
    if (isLeapYear(year)) {
        alert(`${year} is a leap year!`);
    } else { 
        alert(`${year} is not a leap year.`);
    }
} else {
    alert("Please enter a valid year.");
} 
