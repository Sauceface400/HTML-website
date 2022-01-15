const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".enter");

if(window.localStorage.getItem("what") == undefined){
    var what = [];
    window.localStorage.setItem("what", JSON.stringify(what));
}

var whatEX = window.localStorage.getItem("what");
var what = JSON.parse(whatEX);

class activities{
    constructor(task){
        this.createItem(task);
    }
    createItem(task){
        var itemBox = document.createElement("div");
        itemBox.classList.add("activities");


        var input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.value = task;
        input.classList.add("item_input");

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = "EDIT";
        edit.addEventListener("click", () => this.edit(input, task));

        var remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = "REMOVE";
        remove.addEventListener("click", () => this.remove(itemBox, task));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }

    edit(input, task){
        if(input.disabled == true){
            input.disabled = !input.disabled;
        }
        else{
            input.disabled = !input.disabled;
            let indexof = what.indexOf(task);
            what[indexof] = input.value;
            window.localStorage.setItem("what", JSON.stringify(what));
        }
    }

    remove(itemBox, task){
        itemBox.parentNode.removeChild(itemBox);
        let index = what.indexOf(task);
        what.splice(index, 1);
        window.localStorage.setItem("what", JSON.stringify(what));
    }
}

add.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
    if(e.which == 13){
        check();
    }
})

function check(){
    if(inputValue.value != ""){
        new activities(inputValue.value);
        what.push(inputValue.value);
        window.localStorage.setItem("what", JSON.stringify(what));
		inputValue.value = "";
    }
}

for(var jobs = 0; jobs < what.length; jobs++){
    new activities(what[jobs]);
}

new activities("eat out");