const monthsName =[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
const weeksName = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];
const pera = document.querySelector(".peragraph");
const dateline = document.querySelector(".dateline");
const timeDiv = document.querySelectorAll(".time .span");
const EndDates = new Date(2022,11,30,10,07);

dateline.innerHTML = `give way finish = ${weeksName[EndDates.getDay()]} ${formate(EndDates.getDate())} ${monthsName[EndDates.getMonth()]} ${EndDates.getFullYear()}, ${formate(EndDates.getHours())}:${formate(EndDates.getMinutes())} PM`;

// ### COUNTDOWN Function ### \\
let COUNTDOWN = setInterval(function getCountdown(){
    const currentDate = new Date();

    var endtime = EndDates.getTime();
    var currenttime = currentDate.getTime();
    var difference = endtime - currenttime;

    let oneSec = 1000;
    let oneMin = 60*oneSec;
    let oneHour = 60*60*oneSec;
    let oneDay = 24*60*60*oneSec;

    var secound = Math.floor((difference % oneMin)/oneSec);
    var minute = Math.floor((difference % oneHour)/oneMin);
    var hour = Math.floor((difference % oneDay)/oneHour);
    var day = Math.floor((difference / oneDay));

    var timeValuAarr = [day, hour, minute, secound];
    var timeValueName = ["days", "hours", "minutes", "seconds"];

    timeDiv.forEach(function(item, index){
        item.innerHTML = `${formate(timeValuAarr[index])} <p>${timeValueName[index]}</p>`
    })
},1000)

// ### FORMATE Function ### \\
function formate(value){
    if(value<10){
        return value = `0${value}`
    }else{
        return value
    }
}