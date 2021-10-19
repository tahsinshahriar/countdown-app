// countdown function

function countdown(){
    // caching the dom element
    const dayEl = document.querySelector('.day');
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

    // Date functionality
    const targetDate = new Date('Oct 21, 2021 00:00:00').getTime();

    const currDate = new Date().getTime();

    const diff = targetDate - currDate;

    // time calculation

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const displayDay = Math.floor(diff / day);
    dayEl.innerText = displayDay;

    const displayHour = Math.floor((diff % day) / hour);
    hourEl.innerText = displayHour;

    const displayMinute = Math.floor((diff % hour) / minute);
    minuteEl.innerText = displayMinute;

    const displaySecond = Math.floor((diff % minute) / second);
    secondEl.innerText = displaySecond;
}

countdown();

setInterval(countdown, 1000);