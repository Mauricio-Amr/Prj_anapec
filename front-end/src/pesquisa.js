 
 
 function enviar(e){
  
  const valor = document.getElementById('fm-pesq').value

  const body = document.querySelector('body')
  const div = document.querySelector('div')
  const paragrafo = document.createElement('p')

  paragrafo.innerHTML = valor

  const div1 = document.getElementById('div1')

  div1.appendChild(paragrafo)
  
  

}
