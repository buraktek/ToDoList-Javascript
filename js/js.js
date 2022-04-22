const buttonDOM = document.getElementById("task")
const listDOM = document.getElementById("list")
let liDOM = document.getElementsByTagName("li")


for(let i=0;i<liDOM.length;i++)
{
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM[i].append(closeButton);
    liDOM[i].onclick = check;
}

function newElement(){
    addElement(buttonDOM.value)
}

const addElement = (value) => {
    if(value)
    {
        let temp_liDOM = document.createElement('li')
        temp_liDOM.innerHTML = value
        listDOM.append(temp_liDOM)

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        liDOM[liDOM.length-1].append(closeButton);
        liDOM[liDOM.length-1].onclick = check;
    }
}

function check(){
    this.classList.toggle("checked");
  }
  
  function removeButton(){
    this.parentElement.remove(); 
  }
