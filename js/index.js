function age() {
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

    document.getElementById("age").innerHTML = `Âge : ${ecart.years} ans`;
}