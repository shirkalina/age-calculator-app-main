// проверка введенных данных
// расчет при нажатии на кнопку
// выведение в output значений из расчетов
// const inputs = document.querySelectorAll("input");
const inputDate = document.querySelector(".date");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const lableDate = document.querySelector(".lable-date");
const lableMonth = document.querySelector(".lable-month");
const lableYear = document.querySelector(".lable-year");

const errors = document.querySelectorAll(".error");
document.querySelector(".button").addEventListener("click", handleSubmit);

let isValidDate = true;
let isValidMonth = true;
let isValidYear = true;

const today = new Date();

console.log(today);

function handleSubmit(evt) {
  evt.preventDefault();

  validateEmptyField();
  if (isValidDate && isValidMonth && isValidYear) {
    console.log(true);
    validDate();
  } else {
    console.log(false);
  }
}

function validateEmptyField() {
  if (!inputDate.value.trim()) {
    errorDay.classList.remove("hidden");
    errorDay.textContent = "This field is required";
    lableDate.style.cssText = "color: hsl(0, 100%, 67%)";
    inputDate.style.cssText = "border-color: hsl(0, 100%, 67%)";
    isValidDate = false;
  } else {
    isValidDate = true;
  }

  if (!inputMonth.value.trim()) {
    errorMonth.classList.remove("hidden");
    errorMonth.textContent = "This field is required";
    lableMonth.style.cssText = "color: hsl(0, 100%, 67%)";
    inputMonth.style.cssText = "border-color: hsl(0, 100%, 67%)";
    isValidMonth = false;
  } else {
    isValidMonth = true;
  }

  if (!inputYear.value.trim()) {
    errorYear.classList.remove("hidden");
    errorYear.textContent = "This field is required";
    lableYear.style.cssText = "color: hsl(0, 100%, 67%)";
    inputYear.style.cssText = "border-color: hsl(0, 100%, 67%)";
    isValidYear = false;
  } else {
    isValidYear = true;
  }
}

function validDate() {
  if (inputYear.value < today.getFullYear()) {
  }

  const birthdayDate = new Date(
    inputYear.value,
    inputMonth.value - 1,
    inputDate.value
  );
  console.log(birthdayDate);

  let age = today.getFullYear() - birthdayDate.getFullYear();
  if (today.getFullYear(1970) > birthdayDate.getFullYear(1970)) {
    age = age - 1;
  } else {
    age = age;
  }
  console.log(age);
}

IMask(document.getElementById("day"), {
  mask: IMask.MaskedRange,
  from: 1,
  to: 31,
  maxLength: 2,
});

IMask(document.getElementById("month"), {
  mask: IMask.MaskedRange,
  from: 1,
  to: 12,
  maxLength: 2,
});

IMask(document.getElementById("year"), {
  mask: IMask.MaskedRange,
  from: 1930,
  to: 2023,
});
