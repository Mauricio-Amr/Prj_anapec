(function () {
    function navegarViaAjax(hash) {
        if (!hash)return

        const link = document.querySelector(`[anap-link = '${hash}']`)
        if (!link) return

        const destino  = document.querySelector(`[anap-link-destino]`)

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
        
    }

    function configurarLinks() {
        document.querySelectorAll('[anap-link]')
        .forEach(link => {
            link.href = link.attributes['anap-link'].value
        })
        
    }

    function navegacaoInicial() {
        if (location.hash){
            navegarViaAjax(location.hash)
        }else{
            const primeiroLink =document.querySelector('[anap-link]')
            navegarViaAjax(primeiroLink.hash)
        }
        
    }

    window.onhashchange = e => navegarViaAjax(location.hash)

    configurarLinks()
    navegacaoInicial()
    
})()