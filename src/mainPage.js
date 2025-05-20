export default async function MainPage(){
  const res = await fetch('./src/mainPage.html');
  console.log(res);
  const html = await res.text();
  console.log(html);

  const tmpl = document.createElement('template');
  tmpl.innerHTML = html.trim();
  console.log(tmpl);

  return tmpl.content.cloneNode(true);
}
