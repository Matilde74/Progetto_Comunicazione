
document.getElementById('mappa').addEventListener("mouseover", hovermappa);
function hovermappa(){
    document.getElementById("mappa_2").className = "d-block";
};

document.getElementById('mappa').addEventListener("mouseout", hovermappa2);
function hovermappa2 (){
    document.getElementById("mappa_2").className = "d-none";
};