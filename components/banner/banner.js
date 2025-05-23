
class BannerComponent extends HTMLElement{


  constructor(){
    super();
    this.scope='banner';
    this.selectors = ['.banner-ct'];
  }

  async connectedCallback(){
    const htmlRes = await fetch('./components/banner/banner.html');

    const tmpl = document.createElement('template');
    tmpl.innerHTML = await htmlRes.text();

    this.selectors.forEach(el=>{
      const tmp = this.querySelector(el);
      if(tmp){
        tmp.setAttribute('data-scope', this.scope);
      }
    });

    this.appendChild(tmpl.content.cloneNode(true));
  }

  async disconnectedCallback(){

  }
}

customElements.define('banner-component', BannerComponent);
