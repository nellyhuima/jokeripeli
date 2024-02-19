function generateRows() {
    const rowsContainer = document.getElementById('rows-container');
    const rowCounter = document.getElementById('row-counter');

    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 7; j++) {
        const number = Math.floor(Math.random() * 10);
        const cell = document.createElement('span');
        cell.textContent = number;
        cell.classList.add('cell');
        row.appendChild(cell);
    }

    rowsContainer.appendChild(row);

    updateRowCount(rowCounter);
}

function updateRowCount(rowCounter) {
    let rowCountText = rowCounter.textContent;
    let currentCount = parseInt(rowCountText.split(':')[1].trim());
    
    currentCount++;
    
    rowCounter.textContent = 'Valmiita rivejä: ' + currentCount;
}