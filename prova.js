
document.getElementById('mappa').addEventListener("mouseover", hovermappa);

function hovermappa() {
    document.getElementById("mappa_2").className = "d-block";
    setTimeout(function() {
        //Your code
        document.getElementById("mappa_2").className = "d-none";
    }, 3000);
};

