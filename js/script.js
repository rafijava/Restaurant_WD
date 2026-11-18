// Date & Time
function showDateTime(){
let now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();
}

setInterval(showDateTime,1000);


// Login Confirmation
function loginConfirm(){
alert("Login Successful!");
}


// Reservation Popup
function reservationConfirm(){
alert("Your Table Reservation is Confirmed!");
}