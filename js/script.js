document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch input values
  const fullName = document.getElementById('fullName').value;

  if (!fullName) {
    alert('Please fill in all fields.');
    return;
  }

  // Log the form data
  console.log('Form submitted with the following data:');
  console.log('Full Name:', fullName);

  // Display success message to the user
  alert('Form submitted successfully!');
});