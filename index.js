import MainPage from './src/mainPage.js';
import './components/banner/banner.js';
import './components/navbar/navbar.js';

const app = document.querySelector('app');
const page = await MainPage();

app.appendChild(page);

