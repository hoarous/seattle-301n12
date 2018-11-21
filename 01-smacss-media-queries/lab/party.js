const divIds = ['#a', '#b', '#c', '#d', '#e', '#f', '#g', '#h', '#i']

$(window).on('resize', function(){
    colorGrad();
})

var pickColor = function(){
    for(let i = 0; i < divIds.length; i++){
        $(divIds[i]).css('background-color', '#' + Math.round(Math.random()*16777215).toString(16));
    }
}

var colorGrad = function(){
    let rGrad = [];
    let gGrad = [];
    let bGrad = [];

    rGrad.push(Math.round(Math.random()*255));
    gGrad.push(Math.round(Math.random()*255));
    bGrad.push(Math.round(Math.random()*255));

    let rTarget = Math.round(Math.random()*255);
    let gTarget = Math.round(Math.random()*255);
    let bTarget = Math.round(Math.random()*255);

    let rStep = (rTarget - rGrad[0]) / divIds.length;
    let gStep = (gTarget - gGrad[0]) / divIds.length;
    let bStep = (bTarget - bGrad[0]) / divIds.length;

    console.log(rStep + ' ' + gStep + ' ' + bStep);
    console.log(rGrad[0] + ' ' + gGrad[0] + ' ' + bGrad[0]);
    console.log(rTarget + ' ' + gTarget + ' ' + bTarget);

    for(let i = 0; i < divIds.length - 1; i++){
        rGrad.push(rGrad[i] + rStep);
        gGrad.push(gGrad[i] + gStep);
        bGrad.push(bGrad[i] + bStep);
    }

    for(let i = 0; i < divIds.length; i++){
        let hexColor = '#' + genHex(rGrad[i]) + genHex(gGrad[i]) + genHex(bGrad[i]);
        console.log(hexColor);
        $(divIds[i]).css('background-color', hexColor);
    }
}

var genHex = function(num){
    if(num < 16){
        return '0' + Math.round(num).toString(16);
    }
    else{
        return Math.round(num).toString(16);
    }
}