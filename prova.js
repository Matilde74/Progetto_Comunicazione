
document.getElementById('mappa').addEventListener("mouseover", hovermappa);

function hovermappa() {
    document.getElementById('mappa').className='d-none';
    document.getElementById('mappa_2').classList.replace("d-none", "d-block");
    document.getElementById('blur').className='blur';
};

