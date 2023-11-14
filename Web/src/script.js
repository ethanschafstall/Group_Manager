index = 0;
names = [];
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
    names[index-1] = "";
    const nameInputGroup = document.getElementById('names');
    if(nameInputGroup.children.length > 1)
    {
        nameInputGroup.removeChild(nameInputGroup.children[index-1]);
    }

}
function displayStudents()
{
    var p = document.createElement("P");
    p.appendChild(document.createTextNode(names[index]));
    document.getElementById("displayStudents").appendChild(p);
}
function getName()
{
    const input = document.getElementById("name");
    const inputValue = input.value
    names.push(inputValue);
    console.log(names[index])
    input.value = "";
    displayStudents()
    index++;
}
