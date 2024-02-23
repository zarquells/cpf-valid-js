let inputCpf = '';
let numbersOfCpf = [];

function verificacaoCpf() {

    inputCpf = document.getElementById('input-Cpf').value;

    if (inputCpf.length !== 11) {
        //verificando se já existe uma mensagem de erro 
        let existeErro = document.getElementById('msg-erro');

        if (!existeErro) {

            // Criando um elemento para exibir a mensagem de erro
            let msgErro = document.createElement('h3'); //<h3> </h3>
            msgErro.id = 'msg-erro'; // Definindo um ID para o elemento criado

            let msgText = document.createTextNode('O CPF inserido deve ter 11 dígitos!');
            msgErro.appendChild(msgText);
            
            // Inserindo o elemento de erro antes do elemento input-Cpf
            document.body.insertBefore(msgErro, document.getElementById('input-Cpf'));
        }
    }
    else{
        //removendo a mensagem de erro se houver uma
        let msg_erro_delete = document.getElementById('msg-erro');
        if (msg_erro_delete) {
            msg_erro_delete.remove();
        }

        //iterando cada numero do cpf numa array
        for (let i = 0; i < 11; i++){
            numbersOfCpf[i] = inputCpf.charAt(i);
        }
        calculoCpf();
    }

}  
function calculoCpf() {

    let primeiroVerificador = 0;
    let segundoVerificador  = 0;

    //calculando e comparando com o digito cpf: (000.000.000-'X'0)
    for (let y = 0; y < 9; y++) { 

        primeiroVerificador += numbersOfCpf[y] * (10 - y);
    }
    
    let dig1Verificado = 11 - (primeiroVerificador % 11);
    
    if (dig1Verificado > 9) {
        dig1Verificado = 0;

    }else{}
    
    //verificar
    if (numbersOfCpf[9] != dig1Verificado) { 

        document.getElementById('output-resultado').innerHTML = 'Este CPF é inválido de acordo com <br> o primeiro dígito verificador';
        return;
    }else{}
    
    //2 dig
    //calcular
    for (let i = 0; i < 10; i++) {

        segundoVerificador += numbersOfCpf[i] * (11 - i);
    }
    let dig2verificado = 11 - (segundoVerificador % 11);

    if (dig2verificado > 9){
        dig2verificado = 0;
        
    }else{}

    //verificar
    if (numbersOfCpf[10] != dig2verificado) {

        document.getElementById('output-resultado').innerHTML = 'Este CPF é inválido de acordo com <br> o segundo dígito verificador';
        return;
    }else{}
    //obs: não tem como esse código de cálculo não ser feio!

    document.getElementById('output-resultado').innerHTML     = 'Este CPF é válido.';

}