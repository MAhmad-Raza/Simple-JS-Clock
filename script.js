const showTimeDate = document.getElementById("showTimeDate");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let date;
let localeDate;
let time;

setInterval(() => {
  date = new Date();
  localeDate = date.toLocaleDateString(undefined, options);
  time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  showTimeDate.innerText = `${time} On ${localeDate}`;
}, 1000);
