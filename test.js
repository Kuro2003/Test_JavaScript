// create a variable to get date today
let get_Date_Today = new Date();

// print index current day by getDay()
console.log('The index of current day is:',get_Date_Today.getDay());

// print current date by getDate()
console.log('The current date is:',get_Date_Today.getDate());

// get first day of the week
let get_First_Day_Of_The_Week = new Date(get_Date_Today.setDate(get_Date_Today.getDate() - get_Date_Today.getDay() + 1));

// print first day of the week
console.log('The first date of the week is:',get_First_Day_Of_The_Week);
