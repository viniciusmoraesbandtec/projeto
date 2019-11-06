function registro (){
    var nome = nomejs.value;
    var cpf =cpfjs.value;
    var email = emailjs.value;
    var senha = senhajs.value;
    var confirmarcao = confrimacaojs.value;
   

    //começo da validação do "cadastrar-se"

    if(nome == "" ){
        
    }
    if(email == "" || email.indexOf ('@') ==-1 ){
        msg_email.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>E-mail</b> com o minimo de carateres` ;
            
    }
    if(cpf == "" || cpf.length  <11 ){
        msg_cpf.innerHTML = `<span style = "color:#a30f0f">  <b>CPF</b> deve conter no minimo 11 digititos.` ;
            
    }

    if(senha == ""|| senha.length <5){
        msg_senha.innerHTML = ` <span style = "color:#a30f0f">  Preencha o campo <b>Senha</b> com no minimo 5 caracteres`;
    }
        
    if(senha != confirmarcao ){
            msg_confirmacao.innerHTML = `<span style = "color:#a30f0f"> as senhas não correspondem`;
    }
}