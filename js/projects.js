
document.addEventListener("DOMContentLoaded", async () => {
    // const host = 'lucbrungard.github.io'
    // const rootPath = window.location.href.substring(0, window.location.href.lastIndexOf(host) + host.length)

    // const projects = await (await fetch(`${rootPath}/projects.json`)).json()

    // const container = document.getElementById('container')
    // for (const semester in projects) {
    //     const semesterContainer = document.createElement("div")
    //     semesterContainer.classList.add("semestre")
    //     container.appendChild(semesterContainer)

    //     const semesterTitle = document.createElement("h2")
    //     semesterTitle.innerHTML = semester
    //     semesterContainer.appendChild(semesterTitle)

    //     for (const project of projects[semester]) {
    //         const projectDiv = document.createElement("div")
    //         projectDiv.classList.add("projet")
    //         semesterContainer.appendChild(projectDiv)

    //         const projectTitle = document.createElement("a")

    //         const projectText = document.createElement("h2")
    //         projectText.innerHTML = project.title
    //         projectTitle.appendChild(projectText)

    //         const projectCarret = document.createElement("i")
    //         projectCarret.classList.add('fa-solid', 'fa-caret-up')
    //         projectCarret.style.color = '#ff963c'
    //         projectTitle.appendChild(projectCarret)

    //         const projectContent = document.createElement("div")
    //         projectDiv.appendChild(projectContent)
    //     }
    // }


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