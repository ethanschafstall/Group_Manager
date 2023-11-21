var names=[];
var groups=[];
var groupSize;
var counter = 0;

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (code == "Enter") {
        addToList();
        const InputBox = document.getElementById('name');  
        InputBox.value = '';
    }
  }, false);

function removeName(){
    const nameInputGroup = document.getElementById('names');
    const input = document.createElement('input'); 
    if(nameInputGroup.children.length > 1)
    {
        nameInputGroup.removeChild(nameInputGroup.children[nameInputGroup.children.length-1]);
    }
}
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
function removeAllChildNodes() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
}
function removeName(id){
    console.log(id);
    names.splice(id,1);
    removeAllChildNodes();
    displayNameList();
}
/*
function createGroups(){
    counter = 0;
    name1 = "";
    name2 = "";
    for (let i = 0; i < names.length-1; i++) {
        for (let j = i+1; j < names.length; j++) {
            name1 = names[i];
            name2 = names[j];
            groups[counter] = name1.concat("+", name2);
            console.log(groups[counter]);
            counter++;
        }
    }
}*/

function createGroups1(groupSize ,currentGroup = []) {
    console.log(groupSize);
    if (currentGroup.length === groupSize) {
        groups.push(currentGroup.join('+'));
        return;
    }

    for (let i = 0; i < names.length-1; i++) {
        if (!currentGroup.includes(names[i])) {
            createGroups([...currentGroup, names[i]]);
        }
    }
    console.log(groups);
}

function createGroups(groupSize, currentGroup = []) {
    if (currentGroup.length === groupSize) {
        groups.push(currentGroup.join('+'));
        return;
    }

    for (let i = counter; i < names.length; i++) {
        if (!currentGroup.includes(names[i])) {
            counter;
            createGroups(groupSize, [...currentGroup, names[i]]);
        }
    }
    console.log(groups);
}

function saveGroupSize(size) {
    groupSize = size;
    console.log(groupSize);
}
// TESTING
// n being the amount of people, r being the group size.
function amountOfWeeks(n, r){
    let nValue = fractorial(n);
    let rValue = fractorial(r);
}
function fractorial(n){
    if (n === 0){
        return 1;
    }
    else{
        return n* fractorial(n-1);
    }
}