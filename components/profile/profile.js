class Profile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const host = 'lucbrungard.github.io'
        const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

        fetch(`${rootPath}/components/profile/profile.html`)
            .then((response) => response.text())
            .then((html) => {
                this.innerHTML = html;
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}

customElements.define('profile-component', Profile);

function getAge() {
    const DAY_TIME = 3600 * 24 * 1000;
    const today = new Date();

    // date de référence
    let dateRef = new Date("2001", "11", "28", "0", "0", "0");
    // objet résultat
    const ecart = {
        years: 0,
    };

    // calcul en jours pleins
    ecart.inDays = ((today.getTime() - dateRef.getTime()) / DAY_TIME) >> 0;

    // nombre d'années complétes
    // on se place sur l'année suivante
    dateRef.setFullYear(dateRef.getFullYear() + 1);
    while (dateRef < today) {
        ecart.years += 1;
        dateRef.setFullYear(dateRef.getFullYear() + 1);
    }
    // réajuste la date en sortie de boucle
    dateRef.setFullYear(dateRef.getFullYear() - 1);

    return ecart.years
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("age").innerHTML = `Âge : ${getAge()} ans`;
})

