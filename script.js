function conferir(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('ano_txt')
    var res = document.getElementById('resp')
    let body_color = document.querySelector('body')
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
            body_color.style.backgroundColor = '#85CAFF'
            //CRIANÇA
        }
        else if(idade > 9 && idade < 25){
            img.src = 'assets/homem-jovem.png'
            body_color.style.backgroundColor = '#5CB8FF'
            //JOVEM
        }
        else if(idade < 50){
            img.src = 'assets/homem-adulto.png'
            body_color.style.backgroundColor = '#00518F'
            //ADULTO
        }
        else{
            img.src = 'assets/homem-idoso.png'
            body_color.style.backgroundColor = '#00233D'
            //IDOSO
        }

        
        if (formsex[1].checked){
            genero = 'Mulher'
        
            if(idade > 0 && idade < 10){
            img.src = 'assets/menina.png'
            body_color.style.backgroundColor = '#F3A5B9'
            //CRIANÇA
        }
            else if(idade > 9 && idade < 25){
            img.src = 'assets/mulher-jovem.png'
            body_color.style.backgroundColor = '#E74B72'
            //JOVEM
        }
            else if(idade < 50){
            img.src = 'assets/mulher-adulta.png'
            body_color.style.backgroundColor = '#D71D4C'
            //ADULTA
        }
            else {
            img.src = 'assets/mulher-idosa.png'
            body_color.style.backgroundColor = '#901433'
            //IDOSA
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Identificamos ${genero} com ${idade} anos`
    res.appendChild(img)   
    }
}
