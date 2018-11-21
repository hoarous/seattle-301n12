const divIds = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i']

var colorparty = function(event){
    colorGrad();
}

var pickColor = function(){
    for(let i = 0; i < divIds.length; i++){
        let colorDiv = document.getElementById(divIds[i]);
        let ranColor = Math.round(Math.random()*16777215);
        let hexColor = 'background-color:#' + ranColor.toString(16);
        colorDiv.setAttribute('style', hexColor);
    }
}

var colorGrad = function(){
    let rGrad = [];
    let gGrad = [];
    let bGrad = [];

    rGrad.push(Math.round(Math.random()*255));
    gGrad.push(Math.round(Math.random()*255));
    bGrad.push(Math.round(Math.random()*255));

    let rStep = Math.floor((Math.round(Math.random()*255) - rGrad[0]) / divIds.length);
    let gStep = Math.floor((Math.round(Math.random()*255) - rGrad[0]) / divIds.length);
    let bStep = Math.floor((Math.round(Math.random()*255) - rGrad[0]) / divIds.length);

    for(let i = 0; i < divIds.length - 1; i++){
        rGrad.push(rGrad[i] + rStep);
        gGrad.push(gGrad[i] + gStep);
        bGrad.push(bGrad[i] + bStep);
    }

    for(let i = 0; i < divIds.length; i++){
        let colorDiv = document.getElementById(divIds[i]);
        let hexColor = 'background-color:#' + rGrad[i].toString(16) + gGrad[i].toString(16) + bGrad[i].toString(16);
        colorDiv.setAttribute('style', hexColor);
    }
}