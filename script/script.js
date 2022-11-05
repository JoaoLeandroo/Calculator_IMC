const button = document.querySelector(".app button")

button.onclick = function(){
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const media = parseFloat(peso/(altura*altura))
    
    if(media < 18.5){
        alert(`
        IMC: ${media.toFixed(1)}
        Abaixo do Peso Normal!`)
    }else if(media >= 18.5 && media <= 24.9){
        alert(`
        IMC: ${media.toFixed(1)}
        Peso Normal!`)
    }else if(media >= 25.0 && media <= 34.9){
        alert(`
        IMC: ${media.toFixed(1)}
        Obesidade Grau (1)`)
    }else if(media >= 35.0 && media <= 39.9){
        alert(`
        IMC: ${media.toFixed(1)}
        Obesidade Grau (2)`)
    }else if(media > 40.0){
        alert(`
        IMC: ${media.toFixed(1)}
        Obesidade Grau (3)
        *PROCURE UM MÉDICO*`)
    }else{
        alert("CAMPO VAZIO, INFORME O SEU PESO E SUA ALTURA.")
    }
}