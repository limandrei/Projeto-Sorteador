function sorteador (){
    const numeroSorteado = document.querySelector(".numero-sorteado")
    const entre = Math.ceil (document.querySelector(".input-entre").value)
    const e = Math.floor (document.querySelector(".input-e").value)
    const numero = Math.floor(Math.random() * (entre - e + 1)) + e;

    if(entre >= e){
        alert("Você precisa digitar um número maior primeiro")
    } if (entre < e){
        numeroSorteado.innerHTML = numero
    }
}

