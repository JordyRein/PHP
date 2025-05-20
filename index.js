import MainPage from './src/mainPage.js';

const app = document.querySelector('app');
const page = await MainPage();

app.appendChild(page);

