function addName() {
    const nameInputGroup = document.getElementById('names');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Name ${nameInputGroup.children.length+1}`;
    input.name = 'name';
    input.style.width = 'calc(100% - 16px)';
    input.style.padding = '8px';
    input.style.marginBottom = '16px';
    input.style.boxSizing = 'border-box';
    nameInputGroup.insertBefore(input, nameInputGroup.children[nameInputGroup.children.length]);
}
function removeName(){
    const nameInputGroup = document.getElementById('names');
    const input = document.createElement('input'); 
    if(nameInputGroup.children.length > 1)
    {
        nameInputGroup.removeChild(nameInputGroup.children[nameInputGroup.children.length-1]);
    }
}