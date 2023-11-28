let numberOfWeeks = 5;
let lastOpenedTab = 1;
function generateWeekDiv(){

    const weekContainer = document.getElementById('week-container');

    for (let index = 1; index < numberOfWeeks+1; index++) {
        const weekButton = document.createElement('div');
        weekButton.textContent = `W:${index}`
        weekButton.id = index;
        weekButton.className = "weekTab";
        weekButton.style["width"] = `${100/numberOfWeeks}` + "%";
        weekButton.setAttribute('onclick', 'log(this.id)');
        weekContainer.appendChild(weekButton);
    }
}

function log(num){
    const lastTab = document.getElementById(lastOpenedTab);
    lastTab.style["background-color"] = "rgb(238, 238, 238)";

    const weekButton = document.getElementById(num);
    weekButton.style["background-color"] = "white";
    console.log(num);
    lastOpenedTab = num;
}