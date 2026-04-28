const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => links?.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();
