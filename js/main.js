const hamburgerMenu = document.getElementById('hamburger-menu');
const drawerNav = document.getElementById('drawer-nav');
const wrapperAll = document.getElementById('wrapper-all');
let isOpen = false;

const toggleMenu = () => {
  if (isOpen) {
    closeMenu();
    return;
  }
  if (!isOpen) {
    openMenu();
    return;
  }
}

const openMenu = () => {
  isOpen = true;
  hamburgerMenu.classList.add('open');
  drawerNav.classList.add('in');
  const scrollY = window.scrollY;
  wrapperAll.style.top = `-${scrollY}px`;
  wrapperAll.classList.add('fixed');
}

const closeMenu = () => {
  const closeFirst = (callback) => {
    isOpen = false;
    hamburgerMenu.classList.remove('open');
    drawerNav.classList.remove('in');
    const top = wrapperAll.style.top.slice(1, -2);
    wrapperAll.style.top = '';
    wrapperAll.classList.remove('fixed');
    callback(top);
  }
  closeFirst((scrollPosition) => {
    window.scrollTo(0, scrollPosition);
  });
}

hamburgerMenu.addEventListener('click', toggleMenu);
