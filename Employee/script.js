document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const employeeId = document.getElementById('employeeId').value;
  const password = document.getElementById('password').value;
  
  // Example validation (you can replace this with your actual login logic)
  if (employeeId && password) {
    console.log('Login attempted with:', employeeId, password);
    // Here you would typically make an API call to authenticate
  } else {
    alert('Please fill in both fields');
  }
  window.location.href = "employee id.html";
});