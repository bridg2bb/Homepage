document.getElementById("btnExpandNav").addEventListener("click", function(e)
{
    let menu = document.getElementById("menu");
    let navigation = document.getElementById("navigation");
    
    let icon = e.target;
    
    if (icon.tagName == "BUTTON")
    {
        icon = icon.getElementsByTagName("i")[0];
    } 
    if (menu.classList.contains("expanded"))
    {
        navigation.scrollTop = 0;
        menu.classList.remove("expanded");
        navigation.classList.remove("expanded");
        setTimeout(function ()
        {
            swapNavIcons(icon, false);
        }, 250);
    } else {
        navigation.classList.add("expanded");
        menu.classList.add("expanded");
        setTimeout(function ()
        {
            swapNavIcons(icon, true);
        }, 250);
    }
});


function swapNavIcons(icon, expand)
{
    if (expand)
    {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    } else {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }
}

document.addEventListener("DOMContentLoaded", function (e)
{
    let lightMode = localStorage.getItem("lightMode");
    if (lightMode == "true")
    {
        document.body.classList.add("light");
        let btnToggleMode =  document.getElementById("btnToggleMode");
        btnToggleMode.innerHTML = btnToggleMode.innerHTML.replace("Light","Dark");
        btnToggleMode.title = btnToggleMode.title.replace ("light", "dark");

        document.getElementById("btnExpandNav").style.transition = "background 1s, color 1s";
    } 
});

document.getElementById("btnToggleMode").addEventListener("click", function(e)
{
    let lightMode = localStorage.getItem("lightMode");
    if (lightMode != "true")
    {
        lightMode = true;
        document.body.classList.add("light");
        let btnToggleMode =  document.getElementById("btnToggleMode");
        btnToggleMode.innerHTML = btnToggleMode.innerHTML.replace("Light","Dark");
        btnToggleMode.title = btnToggleMode.title.replace ("light", "dark");
    } else {
        lightMode = false;
        document.body.classList.remove("light");
        let btnToggleMode =  document.getElementById("btnToggleMode");
        btnToggleMode.innerHTML = btnToggleMode.innerHTML.replace("Dark","Light");
        btnToggleMode.title = btnToggleMode.title.replace ("dark", "light");
    }
    localStorage.setItem("lightMode", lightMode);
});