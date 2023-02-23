
function comecar() {

}

function parar(){

}

function mudarCor() {
    titulo = document.getElementById('cabecalho')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    titulo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    setInterval(mudarCor, 1000);
}