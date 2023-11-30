// Global variables
var names=[];
var groups=[];
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



function getInputValue() { 
    if (names.length == 0) {
        return;
    }
    const sums = document.getElementById("groupSize");
    const values = names.join(",");
    const total = sums.value;
    let person = values.split(",");
  
    let random = person.sort(() => Math.random() - 0.5);
    console.log(random);
  
    function chunk(array, size) {
      if (array.length <= size) {
        return [array];
      }
      console.log([array.slice(0, size), ...chunk(array.slice(size), size)]);
      return [array.slice(0, size), ...chunk(array.slice(size), size)];
    }
  
    var team = chunk(random, total);
  
    const teamsContainer = document.getElementById('teamsContainer');
    teamsContainer.classList.add('container');
    teamsContainer.innerHTML = '';
    teamsContainer.style.minWidth = '900px';
    teamsContainer.style.width = 'auto';
    teamsContainer.style.minHeight = '200px';
    teamsContainer.style.height = 'auto';
    teamsContainer.style.margin = '20px';

    for (let i = 0; i < team.length; i++) {
        const teamButton = document.createElement('button');
        teamButton.textContent = `Group:${i + 1}: ${team[i].join(', ')}`;
        teamButton.classList.add('group');
        teamButton.classList.add('button');
        teamsContainer.appendChild(teamButton);
    }
    addResetButton();
  }

  function resetScript() {
    names = [];
    groups = [];
    counter = 0;
    index = 0;

    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';

    const teamsContainer = document.getElementById('teamsContainer');
    teamsContainer.classList.remove('container');
    teamsContainer.innerHTML = '';

    const sums = document.getElementById("groupSize");
    sums.value = '';

    const inputBox = document.getElementById('name');
    inputBox.value = '';

    const resetButton = document.getElementById("reset");
    resetButton.setAttribute("hidden", "hidden");

}

function addResetButton(){

    const resetButton = document.getElementById("reset");
    resetButton.removeAttribute("hidden");

}