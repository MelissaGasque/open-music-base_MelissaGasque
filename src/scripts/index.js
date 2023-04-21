//Adicionar botoes da array de Categorias
function addCategories(){
    const div = document.querySelector(".nav_div")

    categories.forEach((categorie)=>{

        const button = document.createElement("button")
        button.innerHTML = categorie
        button.classList.add("nav_div-button")
        button.id = categories.indexOf(categorie)
        div.appendChild(button)
    })
}
addCategories()

//Filtrar os albums nas categorias e nos preços
function filterGeneroMusical(products){
    const buttons = document.querySelectorAll(".nav_div-button")
    const inputRange = document.querySelector(".span_range-input")
    
    addProduts(products)
       
    inputRange.addEventListener("input", ()=>{
        const valor = document.querySelector(".span_range-value")
        valor.innerText = `Até R$ ${inputRange.value}`
   
        const newProducts = products.filter(
            (product) => product.price <= inputRange.value
        );
        addProduts(newProducts);
    })

    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{ 
            inputRange.value = 40
            if(button.id !== 0){
                const newProducts = products.filter((product) =>
                    product.category === button.id && product.price <= inputRange.value
                );
                addProduts(newProducts);
            } else {
                addProduts(products);
            }
        })
    })
}
filterGeneroMusical(products);


//Adicionar um Album
function addProduts(products){
    const section = document.querySelector(".albuns")
    section.innerHTML = ""

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

