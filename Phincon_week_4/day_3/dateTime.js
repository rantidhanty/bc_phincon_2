const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const getYear = () => {
    return new Date().getFullYear();
};
const getDay = () => {
    return weekday[new Date().getDay()] ;
};
const getDate = () => {
    return new Date().getDate()
}
const getMonth = () => {
    return Number(new Date().getMonth()) + 1;
};
const getFullDate = () => {
    return getDay() + ', ' + '/' + getMonth() + '/' + getYear();
}
const day = "weddnesday";

const numbers = [1, 2, 3, 4, 5]
module.exports = {getDay, getMonth, getYear, day, numbers, getFullDate};
