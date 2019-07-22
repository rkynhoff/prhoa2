/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// contact form https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript

function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();

  // Push our data into our FormData object
  for(name in data) {
    FD.append(name, data[name]);
  }

  // Define what happens on successful data submission to be used in the future
  // XHR.addEventListener('load', function(event) {
  //   alert('Yeah! Data sent and response loaded.');
  // });

  // Define what happens in case of error to be used in the future
  // XHR.addEventListener('error', function(event) {
  //   alert("Oops! Something went wrong.");
  // });

  // Set up our request - possibly to be used in the future
// window.location.href = "mailto:hoaplumrun@gmail.com"

  // Send our FormData object; HTTP headers are set automatically
//   XHR.send(FD);
}

// Contact form validation

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
