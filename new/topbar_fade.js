let lastScrollY = 0;
const topbar = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // 아래로 스크롤 시 숨김
    topbar.classList.add('opaque');
  } else {
    // 위로 스크롤 시 나타남
    topbar.classList.remove('opaque');
  }
  lastScrollY = currentScrollY;
});