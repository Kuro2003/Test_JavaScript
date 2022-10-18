let date_today = new Date();

console.log(`The current day index of the week is: ${date_today.getDay()}`);

console.log(`The current date of the week is: ${date_today.getDate()}`);

let first_day_of_the_week = new Date(date_today.setDate(date_today.getDate() - date_today.getDay() ));

let last_day_of_the_week = new Date(date_today.setDate(date_today.getDate() - date_today.getDay() + 6));

console.log(`The first date of the week is: ${first_day_of_the_week}`); 

console.log(`The last day of the week is: ${last_day_of_the_week}`);