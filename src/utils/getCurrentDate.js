export function getCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${day} ${month} ${year}`;
}

// Example usage
const currentDate = getCurrentDate();
console.log("Current day:", currentDate.day);
console.log("Current month:", currentDate.month);
console.log("Current year:", currentDate.year);
console.log("Full date:", currentDate.fullDate);
