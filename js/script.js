document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("signupForm");
  var fullNameInput = document.getElementById("fullName");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var submitButton = document.getElementById("submitButton");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form submission
    //Validates the form fields are filled properly
    var isFullNameValid = fullNameInput.value.trim() !== "";
    var isEmailValid = emailInput.checkValidity(); //Use built in email validation
    var isPasswordValid = passwordInput.value.length >= 6;//Validates that a created password is at least six characters
    //Displays error messages
    document.getElementById("fullNameError").textContent = isFullNameValid ? "" : "Please enter your full name";
    document.getElementById("emailError").textContent = isEmailValid ? "" : "Please enter a valid email address";
    document.getElementById("passwordError").textContent = isPasswordValid ? "" : "Password must be at least 6 characters long";
    //If all the fields are validated then submit the form
    if (isFullNameValid && isEmailValid && isPasswordValid) {
    form.submit();
    alert("Welcome, " + fullNameInput + ". You should recieve an email shortly");
    }
  });
});