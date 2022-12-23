function gerador(option){
    var botoption=parseInt(Math.random()*(4-1)+ 1)
    var resultado="empate"
    var labelresult=document.getElementById("result")
document.getElementById("imgjogador").src=`/assets/imagem/${option}.png`
document.getElementById("imgBot").src=`/assets/imagem/${botoption}.png`
document.getElementById("bot").src=`/assets/imagem/${botoption}.png`
switch(botoption){
    case 1:

        if(option==3){
            resultado="Você perdeu"

        }else if(option==2){
            resultado="Você ganhou"
        }
        break;
    case 2:

        if(option==1){
            resultado="Você perdeu"

        }else if(option==3){
            resultado="Você ganhou"
        }
        break;
    case 3:

        if(option==2){
            resultado="Você perdeu"

        }else if(option==1){
            resultado="Você ganhou"
        }
        break;
}labelresult.innerHTML=resultado
}