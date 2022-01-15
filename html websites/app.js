//when the programe is loaded this code will run
window.addEventListener("load", () => {
    //this is to select the sound element and the tap and all the div within the tap element
    const sound = document.querySelectorAll(".sound");
    const taps = document.querySelectorAll(".tap div");
    const visual = document.querySelector(".visual");
    const colour = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    taps.forEach((tap, index) => { 
        tap.addEventListener("click", function(){
            //this is for resetting the time when we click the tap again without having issues
            sound[index].currentTime = 0;
            //this is because is a collection of sounds that we can pick
            //the index will exces the sound individualy
            sound[index].play();

            craeteBubbles(index);
        });
    });
    //this is to craete the bubbles
    const craeteBubbles = index => {
        const bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colour[index];
        bubbles.style.animation = 'jump 1s ease';
        //when ever a bubble is created within the visual it'll automatically delete it
        bubbles.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    };
});