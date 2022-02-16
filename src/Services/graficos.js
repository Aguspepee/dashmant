


let startDate1 = new Date(2022, 0, 1);

let endDate1 = new Date(2022, 0, 31);

const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  //to avoid modifying the original date
  let theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, endDate];
  return dates;
};

console.log(getDatesBetweenDates(startDate1, endDate1));

export default getDatesBetweenDates;
