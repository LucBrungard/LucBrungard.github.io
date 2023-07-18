const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = '<object type="text/html" data="components/header/header.html" ></object>';

const host = 'LucBrungard.github.io'
const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

console.log(`${rootPath}/components/header/header.html`)

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch(`${rootPath}/components/header/header.html`)
            .then((response) => response.text())
            .then((html) => {
                this.innerHTML = html;
            })
            .catch((error) => {
                console.warn(error);
            });
        // this.innerHTML = `
        // <header>
        //     <div>
        //         <a href="/index.html"> <img src="/img/header/accueil.png" alt="accueil" title="accueil" /> Accueil </a>
        //     </div>
        //     <div>
        //         <a href="/projects.html"><img src="/img/header/portefolio.png" alt="portfolio" title="portfolio" /> Portfolio</a>
        //     </div>
        //     <div>
        //         <a href="/common/contact.html"><img src="/img/header/contact.png" alt="contact" title="contact" /> Contact</a>
        //     </div>
        // </header>`
        // const shadowRoot = this.attachShadow({ mode: 'closed' });

        // shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);