function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.querySelector('.overlay').style.display = 'block';
}

function closeMenu() {
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.overlay').style.display = 'none';
}