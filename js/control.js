firebase.database().goOnline();
let variablesdecontrol=new Object();

window.onload=function(){


    loginchafa();
    function loginchafa(){

        var email = prompt("email: ", "email");

        var password = prompt("password: ", "pwd");
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        //firebase.auth().
    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('Control/Pelt').once('value',function (snapshot) {
                variablesdecontrol.Pelt=snapshot.val();
            });
            firebase.database().ref('Control/Bomba').once('value',function (snapshot) {
                if (snapshot.val()==1)     $('#bomba').bootstrapToggle('off');
                else if (snapshot.val()==0) $('#bomba').bootstrapToggle('on');
                variablesdecontrol.Bomba=snapshot.val();
            });

            firebase.database().ref('Control/AireC').once('value',function (snapshot) {
                if (snapshot.val()==1)     $('#acalient').bootstrapToggle('off');
                else if (snapshot.val()==0) $('#acalient').bootstrapToggle('on');
                variablesdecontrol.AireC=snapshot.val();

            });
            firebase.database().ref('Control/AireF').once('value',function (snapshot) {
                if (snapshot.val()==1)     $('#aFrio').bootstrapToggle('off');
                else if (snapshot.val()==0) $('#aFrio').bootstrapToggle('on');
                variablesdecontrol.AireF=snapshot.val();

            });
            firebase.database().ref('Control/tempDesired').once('value',function (snapshot) {
                document.getElementById('tempdesi').value = snapshot.val();
                variablesdecontrol.tempDesired=snapshot.val();

            });


            $('#bomba').change(function() {
                if (variablesdecontrol.Bomba==0)    {
                    variablesdecontrol.Bomba=1;
                    changeVarControl(variablesdecontrol);
                }
                else if (variablesdecontrol.Bomba==1){
                    variablesdecontrol.Bomba=0;
                    changeVarControl(variablesdecontrol);

                }

            });

            $('#acalient').change(function() {
                if (variablesdecontrol.AireC==0)    {
                    variablesdecontrol.AireC=1;
                    changeVarControl(variablesdecontrol);
                }
                else if (variablesdecontrol.AireC==1){
                    variablesdecontrol.AireC=0;
                    changeVarControl(variablesdecontrol);


                }

            });
            $('#aFrio').change(function() {
                if (variablesdecontrol.AireF==0)    {
                    variablesdecontrol.AireF=1;
                    changeVarControl(variablesdecontrol);
                }
                else if (variablesdecontrol.AireF==1){
                    variablesdecontrol.AireF=0;
                    changeVarControl(variablesdecontrol);


                }

            });

            document.getElementById('tempdesi').oninput =function () {
                variablesdecontrol.tempDesired=document.getElementById('tempdesi').value;
                changeVarControl(variablesdecontrol);
            };


        } else {
            // User is signed out.
            // loginchafa()
            // ...
        }
    });





};

function changeVarControl(variablesControl) {


    var variablesControl = variablesControl;

    var updates = {};
    updates['/Control/'] = variablesControl;
    return firebase.database().ref().update(updates);
}
