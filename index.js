import MainPage from './src/mainPage.js';
import './components/banner/banner.js';
import './components/navbar/navbar.js';

async function loadCSS(url){
  const res = await fetch(url);
  return res.text();
}

(async()=>{
  const bannerCSS = await loadCSS('components/banner/banner.css');
  const navbarCSS = await loadCSS('components/navbar/navbar.css');

  const style = document.createElement('style');
  style.textContent = bannerCSS + '\n' + navbarCSS;
  document.head.appendChild(style);
})();

const app = document.querySelector('app');
const page = await MainPage();

app.appendChild(page);

