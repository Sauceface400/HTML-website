const slides=document.querySelector(".slider").children;
const previous=document.querySelector(".previous");
const next=document.querySelector(".next");
const indicators=document.querySelector(".indicators");
let index=0;

    previous.addEventListener("click", function(){
        previousSlide();
        updateCircleIndicators();
        resetTimer();
    })
    function previousSlide(){
        if(index==0){
            index=slides.length-1;
        }
        else{
            index--;
        }
        changeSlide();
    }
    next.addEventListener("click", function(){
        nextSlide();
        updateCircleIndicators();
        resetTimer();
    })
    function circleIndicators(){
        for(let i=0; i < slides.length; i++){
            const div = document.createElement("div");
                  div.index=i;
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                    div.className="active";
                }
               indicators.appendChild(div);
        }
    }
    circleIndicators();
    function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicators();
        resetTimer();
    }
    function updateCircleIndicators(){
        for(let i=0; i<indicators.children.length; i++){
            indicators.children[i].classList.remove("active");
        }
        indicators.children[index].classList.add("active");
    }
    function nextSlide(){
        if(index==slides.length-1){
            index=0;
        }
        else{
            index++;
        }
        changeSlide();
    }
    function changeSlide(){
        for(let i=0; i<slides.length; i++){
            slides[i].classList.remove("active")
        } 
        slides[index].classList.add("active");
    }
    function resetTimer(){
        clearInterval();
        timer=setInterval(autoPlay, 5000);
    }
    function autoPlay(){
        nextSlide();
        updateCircleIndicators();
    }
    let timer=setInterval(autoPlay, 5000);