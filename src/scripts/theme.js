const render = () => {
    const modoNoturnoButton = document.querySelector(".header_modoNoturno-img")
    const html = document.querySelector("html")   //pega o html

    //Para salvar a escolha do usuario no LocalStorage
    //O localStorage salva tudo como string, por isso, utiliza-se o JSON para transformar em Booleano  

    const preferenciaUsuarioMode = JSON.parse(localStorage.getItem("dark__mode"))
    
    if(preferenciaUsuarioMode){ //Não é necessário comparar com true e false pois é redundante
        modoNoturnoButton.src = "src/assets/img/sun.png"
        html.classList.add("dark__mode")
    }else{
        modoNoturnoButton.src = "src/assets/img/moon.png"
    
    }

    modoNoturnoButton.addEventListener("click", () =>{
        html.classList.toggle("dark__mode") //Classe com o root diferente
        //O toggle verifica se existe, se existir remove, se não existir adiciona. É um liga e desliga da classe
        if(html.classList.contains("dark__mode")){
            modoNoturnoButton.src = "src/assets/img/sun.png"
            //Para salvar a escolha do usuario no LocalStorage
            localStorage.setItem("dark__mode", true)
        }else{
            modoNoturnoButton.src = "src/assets/img/moon.png"
            localStorage.setItem("dark__mode", false)
        }
    })
}
render()