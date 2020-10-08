const datePicker = (element) => {
    const choseDate = localStorage.getItem(`${element}`);
    if (choseDate != null) {
        const realDate = choseDate.split(' ');
        let monthName;
        let dayName;

        switch (realDate[0]) {
            case "Mon":
              dayName = "Monday";
              break;
            case "Tue":
                dayName = "Tuesday";
              break;
            case "Wed":
                dayName = "Wednesday";
              break;
            case "Thu":
                dayName = "Thursday";
              break;
            case "Fri":
                dayName = "Friday";
              break;
            case "Sat":
                dayName = "Saturday";
              break;
            case "Sun":
                dayName = "Sunday";
              break;
            default:
              dayName = "N/A";
          };
        switch (realDate[1]) {
            case "Jan":
              monthName = "January";
              break;
            case "Feb":
              monthName = "February";
              break;
            case "Mar":
              monthName = "March";
              break;
            case "Apr":
              monthName = "April";
              break;
            case "May":
              monthName = "May";
              break;
            case "Jun":
              monthName = "June";
              break;
            case "Jul":
              monthName = "Jul";
              break;
            case "Aug":
              monthName = "August";
              break;
            case "Sep":
              monthName = "September";
              break;
            case "Oct":
              monthName = "October";
              break;
            case "Nov":
              monthName = "November";
              break;
            case "Dec":
              monthName = "December";
              break;
            default:
              monthName = "N/A";
          };


        const finalDate = [dayName,monthName,realDate[2],realDate[3]].join(" ")
        const reservationStart = document.querySelector(`.date__box-in-${element}`);
        reservationStart.innerHTML = `${finalDate}`
    }
}

const getMonthFromDate = (date, element) => {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const realDate = date.toLocaleDateString('en-EN', options);
    const reservationStart = document.querySelector(`.date__box-in-${element}`);
    reservationStart.innerHTML = `${realDate}`

};