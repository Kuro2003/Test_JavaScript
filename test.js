function get_hours_and_minutes(total_minutes) {
    const hours = Math.floor(total_minutes / 60);
    const minutes = total_minutes % 60;
    return `${covert_2_digits(hours)}:${covert_2_digits(minutes)}`;
}

function covert_2_digits(numbers) {
    return numbers.toString().padStart(2, '0');
}

num1 = 100;
num2 = 150;
num3 = 360;

console.log(num1 + " convert to hours and minutes: " +
get_hours_and_minutes(num1)); // 01:40
console.log(num2 + " convert to hours and minutes: " +
get_hours_and_minutes(num2)); // 02:30
console.log(num3 + " convert to hours and minutes: " +
get_hours_and_minutes(num3)); // 06:00