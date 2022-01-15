const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

//if the localstorage  = undefind store the list as a string
if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

//this for making class of items
class item{
    //create another a list
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
        //create an element of div and store the value from the input to the list
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        //create an input in the list
    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
        input.value = name;
        //grab the value from the input and display here
    	input.classList.add('item_input');
        
        //create the edit button in the list
    	var edit = document.createElement('button');
    	edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        //when click the edit btn let us edit the value in the list
    	edit.addEventListener('click', () => this.edit(input, name));
        
        //create the remove btn
    	var remove = document.createElement('button');
    	remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        //when click the remove btn remove the valu inside the list
    	remove.addEventListener('click', () => this.remove(itemBox, name));
        
        //add the container of the list
    	container.appendChild(itemBox);
        
        //add the textbox and two of the btn inside the container
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }
    

    edit(input, name){
        //if the input is disable make it not disabled
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            //highlight the value in the list
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        //remove the div
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
    //if the value != "" when we push the enter btn it'll store the value inside the list
    //as a string
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

//when enter in a value it'll create a new list and a new index
for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

//add a deffault string of sports
new item("sport");