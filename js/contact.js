document.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByTagName('i')
    for (let i = 0; i < elements.length; i++) {
        const element = elements.item(i)
        element.addEventListener("mouseover", (event) => {
            if (element) element.classList.add('fa-beat')
        });
        element.addEventListener("mouseleave", (event) => {
            if (element) element.classList.remove('fa-beat')
        });
    }
})