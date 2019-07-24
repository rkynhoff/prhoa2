function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();

  // Push the data into our FormData object
  for(name in data) {
    FD.append(name, data[name]);
  }

var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail')
var error = document.querySelector('.error');
var submit = document.getElementById('buttonSubmit')

email.addEventListener("input", function(event) {
  if (email.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
  }
}, false);
submit.addEventListener("click", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "Email required";
    error.className = "error active";
    event.preventDefault();
  } else {
    sendData();
  }
}, false);
