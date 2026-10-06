// let contador = 0;

let contador =localStorage.getItem(`contador`) || 0;


function resultado(){
    document.getElementById(`resultado`).innerHTML = `<p>Resultado: ${contador}</p>`;

}
function Adicionar(){
    contador++;
    localStorage.setItem(`contador`, contador);
    // document.getElementById(`resultado`).innerHTML = `
    // <p>Resultado: ${contador}</p>
    // `;
    resultado();
}
function Subtrair(){
    contador--;
    localStorage.setItem(`contador`, contador);
    // document.getElementById(`resultado`).innerHTML = `
    // <p>Resultado: ${contador}</p>
    // `;
    resultado();
}
function resetar(){
    contador = 0;
    localStorage.setItem(`contador`, contador);
    // document.getElementById(`resultado`).innerHTML = `
    // <p>Resultado: ${contador}</p>
    // `;
    resultado();
}

resultado();
