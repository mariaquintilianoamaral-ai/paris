// CURTIDAS


const botaoCurtir = document.querySelector("#curtir");

const contador = document.querySelector("#curtir span");


let curtidas = 0;


botaoCurtir.addEventListener("click",()=>{


curtidas++;

contador.textContent = curtidas;


});





// MODO ESCURO


const botaoTema = document.querySelector("#modoEscuro");


botaoTema.addEventListener("click",()=>{


document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){


botaoTema.innerHTML="☀️ Modo Claro";


}

else{


botaoTema.innerHTML="🌙 Modo Escuro";


}


});