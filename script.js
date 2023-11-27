function conferir(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('ano_txt')
    var res = document.getElementById('resp')
    if (anoForm.value.length == 0 || anoForm.value > ano){
        window.alert('ERRO: Verifique os dados!')
    }
    else {
    var formsex = document.getElementsByName('radiosex')
    var idade = ano - Number(anoForm.value)
    var genero = ''
    var img = document.getElementById('foto')
        if (formsex[0].checked){
            genero = 'Homem'
        }
        if (idade >= 0 && idade < 10){
            img.src = 'assets/menino.png'
            //CRIANÇA
        }
        else if(idade > 9 && idade < 25){
            img.src = 'assets/homem-jovem.png'
            //JOVEM
        }
        else if(idade < 50){
            img.src = 'assets/homem-adulto.png'
            //ADULTO
        }
        else{
            img.src = 'assets/homem-idoso.png'
            //IDOSO
        }

        if (formsex[1].checked){
            genero = 'Mulher'
        
            if(idade > 0 && idade < 10){
            img.src = 'assets/menina.png'
            //CRIANÇA
        }
            else if(idade > 9 && idade < 25){
            img.src = 'assets/mulher-jovem.png'
            //JOVEM
        }
            else if(idade < 50){
            img.src = 'assets/mulher-adulta.png'
            //ADULTA
        }
            else {
            img.src = 'assets/mulher-idosa.png'
            //IDOSA
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Identificamos ${genero} com ${idade} anos`
    res.appendChild(img)   
    }
}
