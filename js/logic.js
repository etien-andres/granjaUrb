



//changetemp(55);
while (true){
    setTimeout( function () {
    firebase.database().goOnline();
    firebase.database().ref('estadoActual/tempno').on('value',function (snapshot) {
        console.log(snapshot.val());
    });

        $.get("http://localhost:3000", function(data, status){
            document.getElementById("tempe").innerText=data;
        });
    }),5000;
}



function changetemp(temp) {
    // A post entry.
    var temperaturas = {
        tempDesired: temp,
        tempDesiredMax: temp+10,
    };

    // Get a key for a new Post.

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/Control/'] = temperaturas;
    //updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
}//console.log(estado);




