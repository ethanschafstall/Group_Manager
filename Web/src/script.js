function addName() {
    const names = document.getElementById('names');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Name ${names.children.length+1}`;
    input.name = 'name';
    input.style.width = 'calc(100% - 16px)';
    input.style.padding = '8px';
    input.style.marginBottom = '16px';
    input.style.boxSizing = 'border-box';
    names.insertBefore(input, names.children[names.children.length]);
    displayStudents();
}
function removeName(){
    const nameInputGroup = document.getElementById('names');
    const input = document.createElement('input'); 
    if(nameInputGroup.children.length > 1)
    {
        nameInputGroup.removeChild(nameInputGroup.children[nameInputGroup.children.length-1]);
    }
}
function displayStudents()
{
    const names = document.getElementById('names');
    document.getElementById("displayStudents").innerHTML = names.children[0].value;
    for (let index = 0; index < nameInputGroup.children.length; index++) {
        
        const input = document.createElement('input');
        document.getElementById("displayStudents").innerHTML = names.children[i].value;
    }
}