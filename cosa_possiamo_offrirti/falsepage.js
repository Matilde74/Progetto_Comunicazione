const openpopup = document.getElementById("openpopup")
const closepopup = document.getElementById("closepopup")
const popup = document.getElementById("popup")


openpopup.addEventListener("click", ()=>{
    popup.classList.add("open")
})

closepopup.addEventListener("click", ()=> {
    popup.classList.remove("open")
})