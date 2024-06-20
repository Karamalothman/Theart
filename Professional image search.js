function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.querySelector('.overlay').style.display = document.getElementById('sidebar').classList.contains('open') ? 'block' : 'none';
}
