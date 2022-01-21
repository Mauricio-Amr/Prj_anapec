
document.querySelectorAll('a').forEach(link => {
    const conteudo = document.getElementsByClassName('anap-link-destino')

    link.onclick = function(e){
        e.preventDefault()

        fetch(link.href)
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)

    }
})