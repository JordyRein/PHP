export default async function MainPage(){
  const res = await fetch('./src/mainPage.html');
  const html = await res.text();

  const tmpl = document.createElement('template');
  tmpl.innerHTML = html.trim();

  return tmpl.content.cloneNode(true);
}
