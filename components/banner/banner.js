
class BannerComponent extends HTMLElement{
  constructor(){
    super();
  }

  async connectedCallback(){
    const [htmlRes, cssRes] = await Promise.all([
      fetch('./components/banner/banner.html'),
      fetch('./components/banner/banner.css'),
    ]);

    const tmpl = document.createElement('template');
    tmpl.innerHTML = await htmlRes.text();

    const style = document.createElement('style');
    style.textContext = await cssRes.text();

    this.appendChild(style);
    this.appendChild(tmpl.content.cloneNode(true));
  }

  async disconnectedCallback(){

  }
}

customElements.define('banner-component', BannerComponent);
