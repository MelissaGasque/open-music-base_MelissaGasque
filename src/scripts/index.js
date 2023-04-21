//Adicionar botoes da array de Categorias
function addCategories(array){
    const div = document.querySelector(".nav_div")

    array.forEach((categorie)=>{

        const button = document.createElement("button")
        button.innerHTML = categorie
        button.classList.add("nav_div-button")
        button.id = array.indexOf(categorie)
        div.appendChild(button)
    })
}
addCategories(categories)

//Filtrar os albums nas categorias 
function filterGeneroMusical(products){
    const buttons = document.querySelectorAll(".nav_div-button")
    const inputRange = document.querySelector(".span_range-input")
    const section = document.querySelector(".albuns")
    section.innerHTML = ""
    let newProducts = []
    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{ 
           let buttonID = parseInt(button.id);
            if( buttonID === 0){
                newProducts = products
            } else {
                newProducts = products.filter((product) => {
                    return product.category === buttonID;
                })
            }  
            addProduts(newProducts)           
        })
    })
}
filterGeneroMusical(products);


//Adicionar um Album
function addProduts(array){
    const section = document.querySelector(".albuns")
    section.innerHTML = ""

    array.forEach((product)=>{
        const article = document.createElement("article")
        article.classList.add("album")
        article.id = array.id

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
    })
}
addProduts(products)

// //Adicionar texto quando não há Albums
// function textoSemProdutos(){
//     const section = document.querySelector(".albuns")
//     const texto = document.createElement("p")
//         texto.innerText = "Nenhum Album Encontrado"
//         texto.id = "nenhumAlbum"
//         section.appendChild(texto)
        // return section
// }
// textoSemProdutos()      

// Filtrar o array de acordo com o valor
function filterByRange (products){
    const inputRange = document.querySelector(".span_range-input")
    inputRange.value = 90
    inputRange.addEventListener("input", ()=>{
        const valor = document.querySelector(".span_range-value")
        valor.innerText = `Até R$ ${inputRange.value}`
        const characterFilter = products.filter((product) => {
             return product.price <= inputRange.value 
        })
        addProduts(characterFilter)
    })
}
filterByRange(products)