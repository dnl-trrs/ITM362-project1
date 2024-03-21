document.getElementById('signupForm').addEventListener('submit', function(event) {
  const fullName = document.getElementById('fullName').value;
  if (!fullName) {
    alert('Please fill in the full name field.');
  } else {
    alert('Form filled successfully!');
  }
});