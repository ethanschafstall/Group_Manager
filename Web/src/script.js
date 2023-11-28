// Global variables
var names=[];
var groups=[];
var groupSize;
var counter = 0;
var index = 0;

// Listens for keyboard events, if the enter key is detected then it adds the name input text to the list of names.
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (code == "Enter") {
        addToList();
        const InputBox = document.getElementById('name');  
        InputBox.value = '';
    }
  }, false);

// Adds 
function addToList(){
    boxvalue = document.getElementById('name').value;
    if (boxvalue != "") {
        names.push(boxvalue);  
        console.log(names);
    }
    const InputBox = document.getElementById('name');  
    InputBox.value = '';
    removeAllChildNodes();
    displayNameList();
}
// Function which displays all
function displayNameList(){
    
    const nameList = document.getElementById('nameList');
    if (names.length > 10) {
        nameList.style.display = "grid";
        nameList.style.gridTemplateColumns = "repeat(3, 1fr)";
        nameList.style.gap = "10px";
    }
    for (let i = 0; i < names.length; i++) {
        const liElement = document.createElement('button');
        liElement.textContent = names[i];
        liElement.classList.add('name');
        liElement.classList.add('button');
        liElement.setAttribute('onclick', 'removeName(this.id)');
        liElement.setAttribute('id', `${i}`,);
        nameList.appendChild(liElement);
    }

}
// Function which removes all tags (child nodes) within the nameList div. Used for updating the display when names are added/removes.
function removeAllChildNodes() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
}
// Function which removes a name from both the names[] array, and from the visual html page.
function removeName(id){
    console.log(id);
    names.splice(id,1);
    removeAllChildNodes();
    displayNameList();
}
// Function which saves user input for the desired group size.
function saveGroupSize(size) {
    groupSize = size;
    console.log(groupSize);
}

