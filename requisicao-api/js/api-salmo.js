/* 
URL: https://www.abibliadigital.com.br/api/verses/nvi/sl/80

Motrar:

nome;
autor
grupo
versos do salmo


VALIDAÇÕES

Validar se o número digitado é um número
*/

function getApi() {
    var formField = document.getElementById("formField").value;

    if (!isNaN(formField)) {

        var url = 'https://www.abibliadigital.com.br/api/verses/nvi/sl/' + formField;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(field => {

                console.log(field)
                document.getElementById("name").value = field.book.name;
                document.getElementById("author").value = field.book.author;
                document.getElementById("group").value = field.book.group;

                var verses = field.verses.reverse();
                verses.forEach(item => {
                    document.getElementById("verses").insertAdjacentHTML('afterbegin', `<li><strong>verso${item.number}</strong>: ${item.text}</li>`)

                })
                
                /*             
                            document.getElementById("clientName").value = field.estado_info.nome
                            document.getElementById("adress").value = field.logradouro
                            document.getElementById("neighborhood").value = field.bairro
                            document.getElementById("zipCode").value = field.cep
                            document.getElementById("state").value = field.estado
                            document.getElementById("city").value = field.cidade */
            })

    }

    else {
        alert('O número não é válido. Digite novamente')
    }
}


