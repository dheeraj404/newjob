const form = document.getElementById('myForm');
const loginForm = document.getElementById('myform-signin');

// Retrieve userData from localStorage if it exists
const userData = JSON.parse(localStorage.getItem('userData')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('input[name="name-signup"]').value.trim();
  const email = document.querySelector('input[name="email-signup"]').value.toLowerCase().trim();
  const password = document.querySelector('input[name="password-signup"]').value;
  userData.push({ name, email, password });

  
  // Clear form fields
  form.reset();
  
  // Store userData in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));
 
  window.location.href = "jobs.html";
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const logemail = document.querySelector('input[name="email-login"]').value.toLowerCase().trim();
  const logpassword = document.querySelector('input[name="password-login"]').value;
  let validUser = undefined ;
  for ( let obj of userData){
    if(obj.email == logemail && obj.password == logpassword) validUser = obj;
  }
  if (validUser) {
    window.location.href = "jobs.html";
  } else {
    alert('Invalid email or password');
  }
});
