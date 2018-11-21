var colorparty = function(event){
    console.log('recoloring');
    pickColor('a');
    pickColor('b');
    pickColor('c');
    pickColor('d');
    pickColor('e');
    pickColor('f');
    pickColor('g');
    pickColor('h');
    pickColor('i');
}

var pickColor = function(divId){
    let colorDiv = document.getElementById(divId);
    let ranColor = Math.round(Math.random()*16777215);
    let hexColor = 'background-color:#' + ranColor.toString(16);
    colorDiv.setAttribute('style', hexColor);
}