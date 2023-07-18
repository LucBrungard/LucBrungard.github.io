class Formation extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const host = 'lucbrungard.github.io'
        const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

        fetch(`${rootPath}/components/formation/formation.html`)
            .then((response) => response.text())
            .then((html) => {
                this.innerHTML = html;
            })
            .catch((error) => {
                console.warn(error);
            });
        // const shadowRoot = this.attachShadow({ mode: 'closed' });

        // shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('formation-component', Formation);