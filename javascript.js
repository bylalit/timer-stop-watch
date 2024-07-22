let sethr = 0;
let setmin = 0;
let setsec = 0;
let setmill = 0;


let start = document.querySelector("#start");
let stoped = document.querySelector("#stop");
let reset = document.querySelector("#reset");


let mill = document.querySelector("#mill");
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let hr = document.querySelector("#hr");

let time = true; 

const timer = () => {
    if (time == true) {
        mill.innerHTML = setmill;
        setmill += 1;
        if(setmill == 100){
            setmill = 0;
            setsec = setsec + 1;
            sec.innerHTML = setsec;
        }

        if (setsec == 60){
            setsec = 0;
            setmin += 1;
            min.innerHTML = setmin;
        }
        if (setmin == 60){
            setmin = 0;
            sethr += 1;
            hr.innerHTML = sethr;
        }
        
    } 
    setTimeout(function(){
        timer();
    },10);
};

const stopTime = () => {
    time = false;
    timer();
}

const resetTime = () => {
    location.reload();
}

start.addEventListener("click", timer);
stoped.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);