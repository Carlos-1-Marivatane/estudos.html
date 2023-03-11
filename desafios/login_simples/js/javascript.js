function verificar(){
    let nome_usuario = document.querySelector("input#nome_usuario").value
    let senha = document.querySelector("input#senha_usuario").value
    let res = document.querySelector("div#res")

    if(nome_usuario.length == "" || senha.length==""){
        res.innerHTML = `Verifique os dados e tente novamente`
        res.style.textAlign = "center"
        res.style.color='#c51a1aa1'
    }else{
        alert(`${nome_usuario} seus dados foram guardados com sucesso. Agora pode aceder a pagina.`)
    }
    //alert(nome_usuario)
}