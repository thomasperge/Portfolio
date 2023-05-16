var mode = document.getElementById("checkboxMode")
var windowsArea = document.getElementById("windowsArea")
var discordImage = document.getElementById('discordImage')
var githubText = document.getElementById('githubText')
var discordPopUp = document.getElementById('popupDiscord')

var discordPopUpBoolean = true

mode.addEventListener('click', () => {
    // Change body class
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    } else if (document.body.classList.contains('light')){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }

    // Change cookie
    if (document.body.classList.contains('dark')) {
        document.cookie = "mode=dark"
    } else if (document.body.classList.contains('light')) {
        document.cookie = "mode=light"
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const cookieObj = new URLSearchParams(document.cookie.replaceAll("&", "%26").replaceAll("; ","&"))

    if (cookieObj.get("mode") == "dark") {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    }
});


githubText.addEventListener('click', () => {
    window.open("https://github.com/thomasperge", '_blank');
})

discordImage.addEventListener('click', () =>  {
    if (discordPopUpBoolean) {
        discordPopUp.style.display = "block"
        discordPopUpBoolean = false
    } else {
        discordPopUp.style.display = "none"
        discordPopUpBoolean = true
    }
})
