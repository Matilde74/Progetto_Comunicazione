document.addEventListener("DOMContentLoaded", () => {
    const openpopup = document.getElementById("openpopup")
    const closepopup = document.getElementById("closepopup")
    const popup = document.getElementById("popup")
    const fakeimgs = document.querySelectorAll(".fakeimg")
    const blur = document.querySelector(".blur")
    const fakelogo = document.querySelector(".fakelogo")
    const imglogo = document.querySelector(".imglogo")
    
    openpopup.addEventListener("click", ()=>{
        document.documentElement.dataset.theme = ""
        popup.classList.add("open")
        blur.style.display="block"
        blur.classList.add("visible")
        fakelogo.style.display="none"
        imglogo.style.display="block"
        fakeimgs.forEach((fakeimg) => {
            fakeimg.setAttribute("src",fakeimg.getAttribute("srcalt"))
        })
    })
    
    closepopup.addEventListener("click", ()=> {
        popup.classList.remove("open")
    })


})