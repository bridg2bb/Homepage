document.addEventListener("scroll", function()
{
    let navigation = document.getElementById("navigation");
    if (window.scrollY > navigation.clientHeight)
    {
        navigation.style.position = "absolute";
        navigation.style.left = 0;
        navigation.style.top = window.scrollY;
    } else {
        navigation.style.position = "relative";
    }
});