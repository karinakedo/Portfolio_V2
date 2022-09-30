const toggle = document.getElementById("colorToggle")

const lightColors = {
    "--main-bg-color": "#F9F5EE",
    "--main-logo-front": "#90afff",
    "--main-logo-edges": "#002480",
    "--main-text-color": "#002480",
    "--main-paragraph-color": "#011d67",
    "--main-header-color": "#FF400F",
    "--main-hover-color": "#1347D2"
}
const darkColors = {
    "--main-bg-color": "#000e30",
    "--main-logo-front": "#90afff",
    "--main-logo-edges": "#2655c4",
    "--main-text-color": "#95E7C5",
    "--main-paragraph-color": "#ECEBE4",
    "--main-header-color": "#ECEBE4",
    "--main-hover-color": "#77B89D"
}


let colors = localStorage.colorMode == "light" ? lightColors : darkColors
const root = document.documentElement

for (color in colors) {
    root.style.setProperty(color, colors[color])
}

toggle.addEventListener("click", function (e) {
    e.preventDefault()

    const root = document.documentElement

    const currentBackground = getComputedStyle(root).getPropertyValue("--main-bg-color")
    const isDark = currentBackground[1] == 0 && currentBackground[2] == 0

    if (isDark) {
        localStorage.colorMode = "light"
    } else {
        localStorage.colorMode = "dark"
    }

    console.log(localStorage.colorMode)

    let colors = isDark ? lightColors : darkColors

    for (color in colors) {
        root.style.setProperty(color, colors[color])
    }
})