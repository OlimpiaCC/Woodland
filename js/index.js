const datePicker = (element) => {
    const choseDate = localStorage.getItem(`${element}`);
    if (choseDate != null) {
      const chosenDate = choseDate.split(" ");
      const chosenDay = chosenDate[2];
      const chosenMonth = chosenDate[1];
      const dayInDatePicker = document.querySelector(
        `.date__box-number-${element}`
      );
      const monthInDatePicker = document.querySelector(
        `.date__box-in-month-${element}`
      );
      monthInDatePicker.innerHTML = `${chosenMonth}`;
      dayInDatePicker.innerHTML = `${chosenDay}`;
    }
}

const getMonthFromDate = (date, element) => {
  let realDate = date.toLocaleDateString().split("/");
  const day = realDate[0];
  const month = realDate[1];
  let monthName;
  const dayInDatePicker = document.querySelector(
    `.date__box-number-${element}`
  );
  const monthInDatePicker = document.querySelector(
    `.date__box-in-month-${element}`
  );

  switch (month) {
    case "01":
      monthName = "JAN";
      break;
    case "02":
      monthName = "FEB";
      break;
    case "03":
      monthName = "MAR";
      break;
    case "04":
      monthName = "APR";
      break;
    case "05":
      monthName = "MAY";
      break;
    case "06":
      monthName = "JUN";
      break;
    case "07":
      monthName = "JUL";
      break;
    case "08":
      monthName = "AUG";
      break;
    case "09":
      monthName = "SEP";
      break;
    case "10":
      monthName = "OCT";
      break;
    case "11":
      monthName = "NOV";
      break;
    case "12":
      monthName = "DEC";
      break;
    default:
      monthName = "N/A";
  }
  monthInDatePicker.innerHTML = `${monthName}`;
  dayInDatePicker.innerHTML = `${day}`;
};

let guestCounter = 3;
let counter = document.querySelector(".guest-counter");

const handleGuestsCounter = (action) => {
  action === "increase"
    ? (guestCounter += 1)
    : guestCounter !== 0 && (guestCounter -= 1);
  counter.innerHTML = guestCounter;
};

document
  .querySelector(".arrow-up")
  .addEventListener("click", () => handleGuestsCounter("increase"));
document
  .querySelector(".arrow-down")
  .addEventListener("click", () => handleGuestsCounter("dicrease"));
