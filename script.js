function mensagem(){
  var n1 = Number.parseFloat(document.getElementById("nota1").value)
  var n2 = Number.parseFloat(document.getElementById("nota2").value)
  var n3 = Number.parseFloat(document.getElementById("nota3").value)
  var n4 = Number.parseFloat(document.getElementById("nota4").value)
  
  if (n1!="" && n2!="" && n3!="" && n4!="")
  {
    calculo(n1, n2, n3, n4)
  }
  else
  {
    window.alert('Existem campos em branco no formulário')
  }
}

function calculo(n1, n2, n3, n4){
//  var n1 = document.getElementById("nota1").value
  var nt1 = Number(n1)
  var nt2 = Number(n2)
  var nt3 = Number(n3)
  var nt4 = Number(n4)
  
  var total = n1+n2+n3+n4
  
  var media = (total/4).toFixed(2)
  //window.alert('Total de notas:' + media)
  
  if (media>=5)
    {
      var mensagem = 'Parabéns, você foi aprovado com a média ' + media
    }
  else
    {
      var mensagem = 'É uma pena, mas você foi reprovado com a média : ' + media
    }
  
  window.alert(mensagem)
  document.getElementById('mediaFinal').innerHTML = mensagem

}

function limpar(){
  document.getElementById("nota1").value = ""
  document.getElementById("nota2").value = ""
  document.getElementById("nota3").value = ""
  document.getElementById("nota4").value = ""
  document.getElementById('mediaFinal').innerHTML = ""
}