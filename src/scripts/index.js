//Adicionar botoes da array de Categorias
function addCategories(categories, products){
    const div = document.querySelector(".nav_div")

    categories.forEach((categorie)=>{

        const button = document.createElement("button")
        button.innerHTML = categorie
        button.classList.add("nav_div-button")
        button.id = categorie

        div.appendChild(button)
    })
}
addCategories(categories, products)

//Filtrar os albums nas categorias
function filterGeneroMusical(products){
    const buttons = document.querySelectorAll(".nav_div-button")
    const adicionarProdutos = addProduts(products)
    const section = document.querySelector(".albuns")
    section.innerHTML = ""
    
    // console.log(buttons)

    buttons.forEach((button) =>{
        button.addEventListener("click", (event)=>{          
            const newProducts = products.filter(product => event.target.id === categories[product.category])
            addProduts(newProducts)
        })
    })
}
filterGeneroMusical(products)


//Adicionar um album Album
function addProduts(products){
    const section = document.querySelector(".albuns")

    products.forEach((product)=>{

        const article = document.createElement("article")
        article.classList.add("album")
        article.id = products.id

        const img = document.createElement("img")
        img.src = product.img
        img.classList.add("album_img")

        const divContainer = document.createElement("div")
        divContainer.classList.add("album-box")

        const divBox = document.createElement("div")
        divBox.classList.add("album_div")

        const banda = document.createElement("p2")
        banda.innerText = product.band
        banda.classList.add("album_band")

        const ano = document.createElement("p2")
        ano.innerText = product.year
        ano.classList.add("album_ano")

        const divTitle = document.createElement("div")

        const title = document.createElement("p2")
        title.innerText = product.title
        title.classList.add("album_title")

        const divComprar = document.createElement("div")
        divComprar.classList.add("div_album")
        
        const preco = document.createElement("p1")
        preco.innerText =`R$ ${product.price.toFixed(2).replace(".", ",")}`
        preco.classList.add("album_price")

        const button = document.createElement("button")
        button.innerText = "Comprar"
        button.classList.add("button_comprar")

        divBox.append(banda, ano)
        divTitle.appendChild(title)
        divComprar.append(preco, button)
        divContainer.append(divBox, divTitle, divComprar)
        article.append(img, divContainer)
        section.appendChild(article)

        return section
    })
}
// addProduts(products)

