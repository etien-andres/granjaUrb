let TESTER = document.getElementById('tester');
let temp = document.getElementById('temp');
let hum = document.getElementById('hum');
let humC = document.getElementById('humC');

firebase.database().goOnline();

let datos=[];





Plotly.plot( temp, [{
    y: datos}], {
    margin: { t: 0 },
    type: "bar"} );


firebase.database().ref('Historicos/Estado/Temp').once('value',function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function(child) {
        //console.log(child.val()['temperatura agua'].typeof);
        let valor=0.0;
        //valor=parseFloat(child.val()['temperatura agua']);
        //console.log(valor.typeof);
        firebase.database().ref('Historicos/Estado/Temp/'+child.key+'/temp').once('value',function (snapshot) {
            //console.log(snapshot.val());
            Plotly.extendTraces(temp,{y: [[snapshot.val()]]},[0])
        });

    });


});

Plotly.plot( TESTER, [{
    y: datos}], {
    margin: { t: 0 },
    type: "bar"} );


firebase.database().ref('Historicos/Estado/Agua').once('value',function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function(child) {
        //console.log(child.val()['temperatura agua'].typeof);
        let valor=0.0;
        //valor=parseFloat(child.val()['temperatura agua']);
        //console.log(valor.typeof);
        firebase.database().ref('Historicos/Estado/Agua/'+child.key+'/temperatura agua').once('value',function (snapshot) {
            //console.log(snapshot.val());
            Plotly.extendTraces('tester',{y: [[snapshot.val()]]},[0])
        });

    });


});


Plotly.plot( hum, [{
    y: datos}], {
    margin: { t: 0 },
    type: "bar"} );


firebase.database().ref('Historicos/Estado/Hum').once('value',function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function(child) {
        //console.log(child.val()['temperatura agua'].typeof);
        let valor=0.0;
        //valor=parseFloat(child.val()['temperatura agua']);
        //console.log(valor.typeof);
        firebase.database().ref('Historicos/Estado/Hum/'+child.key+'/Humedad').once('value',function (snapshot) {
            //console.log(snapshot.val());
            Plotly.extendTraces(hum,{y: [[snapshot.val()]]},[0])
        });

    });


});


Plotly.plot( humC, [{
    y: datos}], {
    margin: { t: 0 },
    type: "bar"} );


firebase.database().ref('Historicos/Estado/HumedadCam').once('value',function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function(child) {
        //console.log(child.val()['temperatura agua'].typeof);
        let valor=0.0;
        //valor=parseFloat(child.val()['temperatura agua']);
        //console.log(valor.typeof);
        firebase.database().ref('Historicos/Estado/HumedadCam/'+child.key+'/HumedadCam').once('value',function (snapshot) {
            //console.log(snapshot.val());
            Plotly.extendTraces(humC,{y: [[snapshot.val()]]},[0])
        });

    });


});





