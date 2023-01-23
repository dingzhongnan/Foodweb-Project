const toggleBtn = document.querySelector('.navbar_toggle_Btn');
const menu = document.querySelector('.navbar_menu');
const register = document.querySelector('.navbar_register');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  register.classList.toggle('active');
});