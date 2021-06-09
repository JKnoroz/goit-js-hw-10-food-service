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

// function switchTheme(e) {
//   if (e.target.checked) {
//     makeDarkTheme();
//   } else {
//     makeLightTheme();
//   }
// }

function switchTheme(e) {
  if (e.target.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}

function replaceTheme(oldTheme, newTheme) {
  document.body.classList.replace(oldTheme, newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

function makeLightTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem(THEME_KEY, Theme.LIGHT);
}

function makeDarkTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem(THEME_KEY, Theme.DARK);
}

function makeSavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === Theme.DARK) {
    themeSwitcher.checked = true;
    makeDarkTheme();
  } else {
    makeLightTheme();
  }
}

const menu = document.querySelector('ul.js-menu');
const menuMarkup = makeMenuMarkup(menuCards);
menu.insertAdjacentHTML('beforeend', menuMarkup);

function makeMenuMarkup(menuCards) {
  // return menuCards.map(cardTpl).join('');
  return cardTpl(menuCards);
}
