import cardTpl from '../src/partials/card-template.hbs';
import menuCards from '../menu.json';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

const themeSwitcher = document.querySelector('.theme-switch__toggle');
themeSwitcher.addEventListener('change', switchTheme);

makeSavedTheme();

function switchTheme(e) {
  if (e.target.checked) {
    makeDarkTheme();
  } else {
    makeLightTheme();
  }
}

function makeLightTheme() {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  localStorage.setItem(THEME_KEY, Theme.LIGHT);
}

function makeDarkTheme() {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
  localStorage.setItem(THEME_KEY, Theme.DARK);
}

function makeSavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === Theme.DARK) {
    themeSwitcher.checked = true;
    makeDarkTheme();
  }
}

const menu = document.querySelector('ul.js-menu');
const menuMarkup = makeMenuMarkup(menuCards);
menu.insertAdjacentHTML('beforeend', menuMarkup);

function makeMenuMarkup(menuCards) {
  // return menuCards.map(cardTpl).join('');
  return cardTpl(menuCards);
}
