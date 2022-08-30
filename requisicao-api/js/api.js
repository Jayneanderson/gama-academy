// Para fazer requisições vamos utilizar o Fetch


/*
API - Filmes https://api.tvmaze.com/search/shows?q=star%20wars
API - Cep https://api.postmon.com.br/v1/cep/05049000
API - Cotação do Dolar https://economia.awesomeapi.com.br/json/last/USD-BRL 
 */

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    .then(response => {
        return response.json();
    })
    .then(body => {
        document.getElementById("dolarValue").innerHTML = body.USDBRL.low
        document.getElementById("responseDolarName").innerHTML = body.USDBRL.name
    });


/* API de CEP */

/* fetch('https://api.postmon.com.br/v1/cep/05049000')
    .then(response => {
        return response.json();
    })
    .then(field => {
        document.getElementById("cep").innerHTML = field.cep;
        document.getElementById("distric").innerHTML = field.logradouro
    }); */

function getAdress() {
    var adress = document.getElementById("inputCep").value;
    var url = 'https://api.postmon.com.br/v1/cep/' + adress;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(field => {
            document.getElementById("clientName").value = field.estado_info.nome
            document.getElementById("adress").value = field.logradouro
            document.getElementById("neighborhood").value = field.bairro
            document.getElementById("zipCode").value = field.cep
            document.getElementById("state").value = field.estado
            document.getElementById("city").value = field.cidade
        })


    console.log(url)
    console.log(adress)
}

function clearFields() {
    document.getElementById("clientName").value = ''
    document.getElementById("adress").value = ''
    document.getElementById("neighborhood").value = ''
    document.getElementById("zipCode").value = ''
    document.getElementById("state").value = ''
    document.getElementById("city").value = ''
}

function teste() {
    alert("Opa")
    document.getElementById("adress").value = 'jay'
}

/* 
1. pego o valor digitado no campo;
2. coloco o valor na URL para ser processado
3. pego o resultado do retorno;
4. exibo nos campos
*/


/* 

========================== Filmes =====================
1. Pegar nome do filme
2. URL onde está disponível

OBS: retorne todos os filmes
*/

var url = 'https://api.tvmaze.com/search/shows?q=star%20wars';
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(field => {

        field.forEach(element => {
            document.getElementById("film").insertAdjacentHTML('afterbegin', `<li><strong>Nome do filme</strong>: ${element.show.name}</li>`)
        });
    })