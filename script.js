let container = document.querySelector('.container');
container.setAttribute('style', 'display: flex');

for (var i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('id', i);
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('style', 'border: 1px solid black; margin: 10px 5px; height: 20px; width: 20px');
        square.addEventListener('mouseenter', () => square.style.backgroundColor = 'blue');
        row.appendChild(square);
    }
}
