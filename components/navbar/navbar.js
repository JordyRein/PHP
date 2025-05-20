
class NavbarComponent extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }

  async connectedCallback(){
    const [htmlRes, cssRes] = await Promise.all([
      fetch('./components/navbar/navbar.html'),
      fetch('./components/navbar/navbar.css'),
    ]);

    const tmpl = document.createElement('template');
    tmpl.innerHTML = await htmlRes.text();

    const style = document.createElement('style');
    style.textContent = await cssRes.text();

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  async disconnectedCallback(){

  }

}

customElements.define('navbar-component', NavbarComponent);
