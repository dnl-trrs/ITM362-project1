document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;

  if (!fullName) {
    alert('Please fill in all fields.');
    return;
  }
});