
document.addEventListener("DOMContentLoaded", async () => {
    const host = 'lucbrungard.github.io'
    const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

    const projects = await (await fetch(`${rootPath}/projects.json`)).json()

    const container = document.getElementById('container')
    for (const semester in projects) {
        const semesterTitle = document.createElement("h2")
        semesterTitle.classList.add("semestre")
        semesterTitle.innerHTML = semester
        container.appendChild(semesterTitle)

        for (const projet of projects[semester]) {
            const projectDiv = document.createElement("div")
            projectDiv.classList.add("projet")
            semesterTitle.appendChild(projectDiv)

            console.log(projet)
        }
    }
})

function roule(varchar) {
    var element = document.getElementById(varchar);

    if (element.classList.contains('doitDisparaitre') || !element.classList.contains('doitApparaitre')) {
        element.classList.remove('doitDisparaitre');
        element.classList.add('doitApparaitre');
        document.getElementById(varchar + 'roule').src = "img/deroule.png";
    }
    else {
        element.classList.remove('doitApparaitre');
        element.classList.add('doitDisparaitre');
        document.getElementById(varchar + 'roule').src = "img/enroule.png";
    }
}