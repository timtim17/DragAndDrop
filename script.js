var dragSrcEl = null;

function handleDragStart(e){
    dragSrcEl = this.parentNode;
}

function handleDrop(e){
    if(dragSrcEl != this) this.appendChild(document.getElementById('dragger'));
}

function handleDragOver(e){
    e.preventDefault();
}

var tds = document.getElementsByTagName('td');
for(var i = 0; i < tds.length; i++){
    tds[i].addEventListener('drop', handleDrop);
    tds[i].addEventListener('dragover', handleDragOver);
}

document.getElementById('dragger').addEventListener('dragstart', handleDragStart);