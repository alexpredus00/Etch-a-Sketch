
function createGrid(size){
    const container = document.getElementById("container");
    for (let i = 0; i < size; i++){
        let newColumn = document.createElement('div');
        newColumn.id = 'column';
        container.appendChild(newColumn);
    }

    const columnList = container.childNodes;
    for(i = 1; i <= size; i++){
        let currentRow = columnList[i];
        for(let j = 0; j < size; j++){
            let newRow = document.createElement('div');
            newRow.id = 'square';
            currentRow.appendChild(newRow);
        }
    }
}

createGrid(16);
createGrid(64);