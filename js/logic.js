




firebase.database().goOnline();
firebase.database().ref('estadoActual/temp').once('value',function (snapshot) {
    console.log(snapshot.val());
    document.getElementById("tempe").innerText=snapshot.val();

});






function changetemp(temp) {
    var temperaturas = {
        AireF:0,
        AireC:0,
        Bomba:0,
        Pelt:0,
        tempDesired: temp,
        tempDesiredMax: temp+10,
    };


    var updates = {};
    updates['/Control/'] = temperaturas;
    return firebase.database().ref().update(updates);
}
setTimeout(function () {
   // console.log("hola");
    location.reload();
},8000);




