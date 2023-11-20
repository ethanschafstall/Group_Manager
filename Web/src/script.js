var names=[];

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
function createGroups(){
    const groupSize = document.getElementById('groupSize');
}
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