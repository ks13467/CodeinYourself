
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}



function toggleForms() {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm.style.display === 'none') {
      signupForm.style.display = 'flex';
      loginForm.style.display = 'none';
  } else {
      signupForm.style.display = 'none';
      loginForm.style.display = 'flex';
  }
}







