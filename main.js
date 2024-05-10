var jogCount = 0;
var pcCount = 0;
var empCount = 0;
function optJog(escolhaJog){
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaPc = opcoes[Math.floor(Math.random() * opcoes.length)];
    const jogador = document.getElementById("jog")
    const pc = document.getElementById("pc")
    const resultado = document.getElementById("resultado");
    
    var vencedor;
    if(escolhaJog == "pedra"){
        if(escolhaPc == "pedra"){
            vencedor = "Empate";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "papel"){
            vencedor = "Pc";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "tesoura"){
            vencedor = "Jogador";
            exibeVencedor(vencedor);
        }
    }else if(escolhaJog == "papel"){
        if(escolhaPc == "pedra"){
            vencedor = "Jogador";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "papel"){
            vencedor = "Empate";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "tesoura"){
            vencedor = "Pc";
            exibeVencedor(vencedor);
        }
    }else if(escolhaJog == "tesoura"){
        if(escolhaPc == "pedra"){
            vencedor = "Pc";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "papel"){
            vencedor = "Jogador";
            exibeVencedor(vencedor);
        }else if(escolhaPc == "tesoura"){
            vencedor = "Empate";
            exibeVencedor(vencedor);
        }
    }

    if(vencedor == "Jogador") 
        jogCount++;
    else if(vencedor == "Pc")
        pcCount++;
    else if(vencedor == "Empate")
        empCount++;

    const exibeJogCount = document.getElementById("jogadorCount").innerHTML = jogCount;
    const exibePcCount = document.getElementById("pcCount").innerHTML = pcCount;
    const exibeEmpCount = document.getElementById("empateCount").innerHTML = empCount;
  
    function exibeVencedor(venc){
        jogador.innerHTML = "Jogador fez: <b>" + escolhaJog + "</b>!";
        pc.innerHTML = "Pc fez: <b>" + escolhaPc + "</b>!";
        if(venc == "Empate")
            resultado.innerHTML = "Portanto <b>não</b> houve vencedor!";
        else
            resultado.innerHTML = "Portanto vencedor foi: <b>" + venc + "</b>!";
    }
}

function zerarPlacar(){
    jogCount = 0;
    pcCount = 0;
    empCount = 0;
  
   const exibeJogCount = document.getElementById("jogadorCount").innerHTML = jogCount;
    const exibePcCount = document.getElementById("pcCount").innerHTML = pcCount;
    const exibeEmpCount = document.getElementById("empateCount").innerHTML = empCount;
}