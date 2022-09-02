
let size_copy;
const child_array = [0];
var body = $('body');

function createGrid(size){

    size_copy = size;                              
    for(let i = 0; i < size * size; i++){          
        child_array[i] = 0;
    }

    let grid = document.querySelector(".grid-container");
    console.log(grid);
    console.log(size);
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    grid.style.gridTemplateColumns = "repeat(" + size + " , 1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + " , 1fr)";

    for(i = 0; i < size * size; i++){
        let pixel = document.createElement('div');
        pixel.id = "pixel" + i;
        pixel.setAttribute('draggable', false);
        pixel.addEventListener("mouseover", (event) => {  
            pixel.style.backgroundColor = "black"; });
        grid.insertAdjacentElement("beforeend", pixel);
    }

}



createGrid(16);



function colorBlack(){
    rainbowBackground(false);
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.addEventListener("mouseenter", (event) => { pixel.style.backgroundColor = "black";});
    }
}


function colorErase(){
    for(let i = 0; i < size_copy * size_copy; i++){         
        child_array[i] = 0;
    }
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.style.backgroundColor = "#c3c3c3";
    }
}




function colorPaintbrush(){  
    rainbowBackground(false);
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        let currentColor = pixel.style.backgroundColor;
        pixel.addEventListener("mouseenter", (event) => { 
            if(currentColor != "black"){
                if(child_array[i] == 0){
                    pixel.style.backgroundColor = "#808080";
                    child_array[i]++;
                } else if(child_array[i] == 1){
                      pixel.style.backgroundColor = "#707070";
                     child_array[i]++;
                } else if(child_array[i] == 2){
                      pixel.style.backgroundColor = "#616161";
                      child_array[i]++;
                } else if(child_array[i] == 3){
                      pixel.style.backgroundColor = "#525252";
                      child_array[i]++;
                } else if(child_array[i] == 4){
                      pixel.style.backgroundColor = "#434343";
                      child_array[i]++;
                } else if(child_array[i] == 5){
                      pixel.style.backgroundColor = "#252525";
                      child_array[i]++;
                } else if(child_array[i] == 6){
                      pixel.style.backgroundColor = "#161616";
                      child_array[i]++;
                } else if(child_array[i] == 7){
                      pixel.style.backgroundColor = "#070707";
                }
            }
        });
    }
}



function colorRainbow(){
    rainbowBackground(true);
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.addEventListener("mouseenter", (event) => { 
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            pixel.style.backgroundColor = "#" + randomColor;
        });
    }
}

let refreshIntervalId = 0;
let running = 0;
function rainbowBackground(value){
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    var currentIndex = 0;
    if(running != value || running == 0){
        if(value == true){
                 refreshIntervalId = setInterval(function () {
                running = value;
                body.css({
                backgroundColor: colors[currentIndex]
                });
                if (!colors[currentIndex]) {
                        currentIndex = 0;
                } else {
                  currentIndex++;
                }
            }, 1000);
        } else {
            clearInterval(refreshIntervalId);
                running = value;
                body.css({
                backgroundColor: "#243447"
                });
        }
    }
}

let textSize = document.getElementById('textSize');
function setSize(value){
    rainbowBackground(false);
    createGrid(value);
    textSize.innerHTML = value + "x" + value;
}
