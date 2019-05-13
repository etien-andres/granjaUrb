
firebase.database().goOnline();

let temp=20,nivel,humedadC,humedad,agua=23;



getTempe();
function getTempe() {
    // and write tempe
    firebase.database().ref('estadoActual/temp').once('value',function (snapshot) {
        document.getElementById("tempe").innerText=snapshot.val()+' °C';

        if (snapshot.val()<(temp+3)&&snapshot.val()>(temp-3)){
            var element = document.getElementById("tempe");
            element.classList.remove("table-danger");

            element.classList.add("table-success");

        }
        if (snapshot.val()<(temp-3)||snapshot.val()>(temp+3)){
            var element = document.getElementById("tempe");
            element.classList.remove("table-success")

            element.classList.add("table-danger");
        }

    });
    firebase.database().ref('estadoActual/Nivel Agua').once('value',function (snapshot) {
        document.getElementById('nivel').innerText=snapshot.val()+' %';
        if (snapshot.val()>80){
            var element = document.getElementById("nivel");
            element.classList.remove("table-danger");

            element.classList.add("table-success");

        }
        if (snapshot.val()<80){
            var element = document.getElementById("nivel");
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
        if (snapshot.val()>agua-3&&snapshot.val()>agua-3){
            var element = document.getElementById("agua");
            element.classList.remove("table-danger");
            element.classList.add("table-success");
        }
        if (snapshot.val()<=agua-3||snapshot.val()>=agua+3){
            var element = document.getElementById("agua");
            element.classList.remove("table-success")
            element.classList.add("table-danger");

        }
    });
    setTimeout(getTempe,500);
}




