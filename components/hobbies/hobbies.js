class Hobbies extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const host = 'lucbrungard.github.io'
        const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

        fetch(`${rootPath}/components/hobbies/hobbies.html`)
            .then((response) => response.text())
            .then((html) => {
                this.innerHTML = html;
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}

customElements.define('hobbies-component', Hobbies);