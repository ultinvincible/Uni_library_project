window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 800)
        this.document.querySelector(".sidebar_cover").style.display = "none";
})

if (student) {
    document.querySelector(".login").innerHTML = "Profile";
}

document.querySelector(".sidebar").addEventListener("click", function () {
    document.querySelector("#navbar").style.display = "flex";
    document.querySelector(".login").style.display = "flex";
    document.querySelector(".sidebar_cover").style.display = "block";
})

document.querySelector(".sidebar_cover").addEventListener("click", function () {
    document.querySelector("#navbar").style.display = "none";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".sidebar_cover").style.display = "none";
})
