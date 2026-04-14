// make clock hands moooove

setInterval(setClock, 1000);

let hourHands = document.querySelectorAll(".hour-hand");
let minuteHands = document.querySelectorAll(".minute-hand");
let secondHands = document.querySelectorAll(".second-hand");

function setClock() {
    let now = new Date();
    const secondsRatio = now.getSeconds() / 60;
    const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + now.getHours()) / 12;
    hourHands.forEach((hourHand) => setRotation(hourHand, hoursRatio));
    minuteHands.forEach((minuteHand) => setRotation(minuteHand, minutesRatio));
    secondHands.forEach((secondHand) => setRotation(secondHand, secondsRatio));
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

// arrange clocks to top or bottom randomly

// let randomBoolean = Math.random() >= 0.5;
// console.log(randomBoolean);
let clocksWrapper = document.querySelector(".clocks-wrapper");

// if (randomBoolean === true) {
//     document.body.style.alignItems = "start";
//     clocksWrapper.style.transform = "translateY(-50%)";
// } else {
//     document.body.style.alignItems = "end";
//     clocksWrapper.style.transform = "translateY(50%)";
// }

// arrange clock to other side

if (localStorage.getItem("align") === "bottom") {
    clocksWrapper.classList.add("clocks-wrapper_top");
    localStorage.setItem("align", "top");
} else {
    clocksWrapper.classList.remove("clocks-wrapper_top");
    localStorage.setItem("align", "bottom");
}