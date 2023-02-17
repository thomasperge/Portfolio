var test = document.getElementById("checkboxMode")
var windowsArea = document.getElementById("windowsArea")
var discordImage = document.getElementById('discordImage')
var githubText = document.getElementById('githubText')

var darkMode = true

test.addEventListener('click', e => {
    if (darkMode) {
        windowsArea.style.backgroundColor = "white"
        document.getElementById("name").style.color = "#242424"
        document.getElementById("developper").style.color = "#242424"
        document.getElementById("githubText").style.color = "#242424"
        document.getElementById("portfolioNameArea").style.color = "#242424"

        const projectTitle = document.querySelectorAll('.projectTitle')
        for (let i = 0; i <= projectTitle.length -1; i++) {
            projectTitle[i].style.color = "#242424"
        }

        const projectDesc = document.querySelectorAll('.projectDescription')
        for (let i = 0; i <= projectDesc.length -1; i++) {
            projectDesc[i].style.color = "#242424"
        }

        const projectTaskTitle = document.querySelectorAll('.tagsTitle')
        for (let i = 0; i <= projectTaskTitle.length -1; i++) {
            projectTaskTitle[i].style.color = "#242424"
        }

        document.getElementById("linkedinImage").style.filter = "invert(0)"
        darkMode = false
    } else {
        windowsArea.style.backgroundColor = "#242424"
        document.getElementById("name").style.color = "white"
        document.getElementById("developper").style.color = "white"
        document.getElementById("githubText").style.color = "white"
        document.getElementById("portfolioNameArea").style.color = "white"
        
        const projectTitle = document.querySelectorAll('.projectTitle')
        for (let i = 0; i <= projectTitle.length -1; i++) {
            projectTitle[i].style.color = "white"
        }

        const projectDesc = document.querySelectorAll('.projectDescription')
        for (let i = 0; i <= projectDesc.length -1; i++) {
            projectDesc[i].style.color = "white"
        }

        const projectTaskTitle = document.querySelectorAll('.tagsTitle')
        for (let i = 0; i <= projectTaskTitle.length -1; i++) {
            projectTaskTitle[i].style.color = "white"
        }

        document.getElementById("linkedinImage").style.filter = "invert(1)"
        darkMode = true
    }
})

githubText.addEventListener('click', e => {
    window.open("https://github.com/thomasperge", '_blank');
})

discordImage.addEventListener('click', e =>  {
    var i = document.getElementById('popupDiscord')
    i.classList.toggle("popupDiscord")
})

