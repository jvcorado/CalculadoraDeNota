function calcMedia(nota1, nota2, notaCurso, notaProjeto, notaAtividade){
    nota1 = parseFloat(document.getElementById('nota1').value)
    nota2 = parseFloat(document.getElementById('nota2').value)
    notaCurso = parseFloat(document.getElementById('notaCurso').value)
    notaProjeto = parseFloat(document.getElementById('notaProjeto').value)
    notaAtividade= parseFloat(document.getElementById('notaAtividade').value)

    
    calculoMedia =  (nota1 +  nota2 + notaCurso + notaProjeto + notaAtividade)
    if(calculoMedia >=101 ){
        document.getElementById("media").innerHTML = `Nota inválida`
        document.getElementById("situacao").innerHTML = `Situação: inválida`
    }
    else if(calculoMedia <=-1){
        document.getElementById("media").innerHTML = `Nota inválida`
        document.getElementById("situacao").innerHTML = `Situação: inválida`
    }
    else if(calculoMedia >=70){
        document.getElementById("media").innerHTML = `Média: ${calculoMedia}`
        document.getElementById("situacao").innerHTML = `Situação: Aprovado`
    }
    else if(calculoMedia <=69){
        document.getElementById("media").innerHTML = `Média: ${calculoMedia}`
        document.getElementById("situacao").innerHTML = `Situação: Reprovado`
    }


    

    
    
}
