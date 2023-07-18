class LanguageSkills extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const host = 'lucbrungard.github.io'
        const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

        fetch(`${rootPath}/components/language-skills/language-skills.html`)
            .then((response) => response.text())
            .then((html) => {
                this.innerHTML = html;
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}

customElements.define('language-skills-component', LanguageSkills);