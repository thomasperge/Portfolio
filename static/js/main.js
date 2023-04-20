var mode = document.getElementById("checkboxMode")
var windowsArea = document.getElementById("windowsArea")
var discordImage = document.getElementById('discordImage')
var githubText = document.getElementById('githubText')
var discordPopUp = document.getElementById('popupDiscord')

var discordPopUpBoolean = true

mode.addEventListener('click', () => {
    // Change body class
    if (document.body.classList.contains('dark')) {
        document.body.remove('dark')
        document.body.add('light')
    } else if (document.body.classList.contains('light')){
        document.body.remove('light')
        document.body.add('dark')
    }

    // Change coockie
    if (document.body.classList.contains('dark')) {
        document.cookie = "mode=light"
    } else {
        document.cookie = "mode=dark"
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const cookieObj = new URLSearchParams(document.cookie.replaceAll("&", "%26").replaceAll("; ","&"))

    if (cookieObj.get("mode") == "dark") {
        document.body.remove('light')
        document.body.add('dark')
    } else {
        document.body.remove('dark')
        document.body.add('light')
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
