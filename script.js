
let size_copy;
const child_array = [0];

function createGrid(size){

    size_copy = size;                              // 
    for(let i = 0; i < size * size; i++){          // storing information for other functions
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
        pixel.addEventListener("mouseover", (event) => {  
            pixel.style.backgroundColor = "black"; });
        grid.insertAdjacentElement("beforeend", pixel);
    }

}
console.log(child_array);
createGrid(16);




function colorBlack(){
    rainbowBackground(false);
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.addEventListener("mouseenter", (event) => { pixel.style.backgroundColor = "black";});
    }
}


function colorErase(){
    rainbowBackground(false);
    for(let i = 0; i < size_copy * size_copy; i++){         
        child_array[i] = 0;
    }
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.style.backgroundColor = "#c3c3c3";
    }
}




function colorPaintbrush(){

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
    for(let i = 0; i < size_copy * size_copy; i++){
        let pixel = document.getElementById("pixel" + i);
        pixel.addEventListener("mouseenter", (event) => { 
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            pixel.style.backgroundColor = "#" + randomColor;
            rainbowBackground(true);
        });
    }
}


function rainbowBackground(run){
    var body = $('body');
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    var currentIndex = 0;
    setInterval(function () {

        body.css({
        backgroundColor: colors[currentIndex]
        });
        if (!colors[currentIndex]) {
                currentIndex = 0;
        } else {
            currentIndex++;
        }
        if(run == false){
            body.css({
                backgroundColor: "purple"
                });
               colors[0] = 'purple';
               colors[1] = 'purple';
               colors[2] = 'purple';
               colors[3] = 'purple';
               colors[4] = 'purple';
               colors[5] = 'purple';
        }
    }, 1000);
    
    
}










/*



*/








