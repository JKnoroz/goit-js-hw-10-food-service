import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('.theme-switch__toggle');
themeSwitcher.addEventListener('change', changeTheme);
function changeTheme() {
  console.log('change theme');
}

function makeLightTheme() {
  body.classList.add('light-theme');
}

function makeDarkTheme() {
  body.classList.add('dark-theme');
}
