
firebase.database().goOnline();

let temp,nivel,humedadC,humedad,agua=23,min,max;



getTempe();
function getTempe() {
    // and write tempe
    firebase.database().ref('Control/tempDesired').once('value',function(snapshot){
        temp=snapshot.val();
         min=temp-3;
         max=temp+3;
    });

    firebase.database().ref('estadoActual/temp').once('value',function (snapshot) {
        document.getElementById("tempe").innerText=(snapshot.val()+' °C');

        if (snapshot.val()<=(temp+3)&&snapshot.val()>=(temp-3)){
            var element = document.getElementById("tempe");
            element.classList.remove("table-danger");

            element.classList.add("table-success");

        }
        if (snapshot.val()<min||snapshot.val()>max){

            var element = document.getElementById("tempe");
            element.classList.remove("table-success")

            element.classList.add("table-danger");
        }

    });

    firebase.database().ref('estadoActual/HumedadCam').once('value',function (snapshot) {
        document.getElementById('humedadC').innerText=snapshot.val()+' %';
        if (snapshot.val()>75){
            var element = document.getElementById("humedadC");
            element.classList.remove("table-danger");

            element.classList.add("table-success");
        }
        if (snapshot.val()<75){
            var element = document.getElementById("humedadC");
            element.classList.remove("table-success")

            element.classList.add("table-danger");

        }
    });
    firebase.database().ref('estadoActual/Humedad').once('value',function (snapshot) {
        document.getElementById('humedad').innerText=snapshot.val()+' %';
        if (snapshot.val()>10){
            var element = document.getElementById("humedad");
            element.classList.remove("table-danger");

            element.classList.add("table-success");
        }
        if (snapshot.val()<10){
            var element = document.getElementById("humedad");
            element.classList.remove("table-success")
            element.classList.add("table-danger");

        }
    });
    firebase.database().ref('estadoActual/temperatura agua').once('value',function (snapshot) {
        document.getElementById('agua').innerText=snapshot.val()+' °C';
            var element = document.getElementById("agua");
            element.classList.add("table-success");


    });
    setTimeout(getTempe,500);
}




