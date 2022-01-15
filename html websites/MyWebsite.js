var i = 0;
var img = [];
var time = 5000; 

img[0] = "pictures/download (1).jpg";
img[1] = "pictures/eiffel.jpg";
img[2] = "pictures/mercedes.jpg"

function changeslide(){
    document.slide.src = img[i];
    if(i < img.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeslide()", time);
}

function right(){
    document.slide.src = img[i]
    i++
    if(i >= img.length){
        i = 0
    }
    
}

function left(){
    document.slide.src = img[i]
    i--
    if(i < 0){
        i = 2
    }
}
window.onload = changeslide;

//text animation
const text = document.querySelector(".sub");
//this is to grab the content of h2 tags
const stringText = text.textContent;
//this is to split the text content individually
const textSplit = stringText.split("")
text.textContent = "";

//for i < textSplit.length itterate the alphabets one by one
for(let i = 0; i < textSplit.length; i++){
    text.innerHTML += "<span>" + textSplit[i] + "</span>";
}

let char = 0;
let timer = setInterval(ontick, 50);

function ontick(){
    //go for the alphabet one by one and add fade class for each of them
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    //if the char = to the textSplit.length execute the complete function
    if(char === textSplit.length){
        complete();
        return;
    }
}

//when the complete function is executed kill the timer
function complete(){
    clearInterval(timer);
    timer = null;
}

document.addEventListener('DOMContentLoaded', nav);

function nav(){
    const burger = document.querySelector('.burger-lines');
    const nav = document.querySelector('.nav-bar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show');
    })
}