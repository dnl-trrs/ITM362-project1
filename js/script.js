document.getElementById('fullName').addEventListener('blur', function () {
    const fullNameValue = this.value;
  
    if (fullNameValue.trim() === '') {
      alert('Please fill in your full name.');
    } else {
      alert('Your full name is filled.');
    }
  });