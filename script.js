document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const loginBox = document.getElementById('loginBox');

  loginBox.style.display = 'none';

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginBox.style.display === 'none') {
      loginBox.style.display = 'block';
    } else {
      loginBox.style.display = 'none';
    }
  });
});
