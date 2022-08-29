
$(function () {
    /*legenda:
        A: adição;
        E: edição
    */
    var operacao = "A"; //"A"=Adição; "E"=Edição

    var index = -1;
    var tableClientes = localStorage.getItem("tableClientes");// Recupera os dados armazenados

    tableClientes = JSON.parse(tableClientes); // Converte string para objeto

    if (tableClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
        tableClientes = [];

    function adicionar() {
        if (
            $("#txtCodigo").val() == ''
            || $("#txtNome").val() == ''
            || $("#txtTelefone").val() == ''
            || $("#txtEmail").val() == ''
            || $("#txtEmail").val() == ''
        ) {
            alert('Todos os campos devem ser preenchidos!')
            return;
        }
        /* verifica se existe um código */
        //chamada do json
        var cliente = getCliente('codigo', $('#txtCodigo').val());
        /* depois teste apenas com a variável (sem o null) */

        if (cliente) {
            alert('O código já está cadastrado');
            return;
        }

        let data = new Date();
        let dia = data.getDate();
        let mes = data.getMonth();

        if (dia < 10) {
            dia = '0' + dia;
        }

        if (mes < 10) {
            mes = '0' + (mes + 1);
        }
        let ano = data.getFullYear();

        /* converte a string para os campos */
        var dataCliente = JSON.stringify({
            codigo: $("#txtCodigo").val(),
            nome: $("#txtNome").val(),
            telefone: $("#txtTelefone").val(),
            email: $("#txtEmail").val(),
            data: `${dia}/${mes}/${ano}`
        });

        tableClientes.push(dataCliente);
        localStorage.setItem('tableClientes', JSON.stringify(tableClientes));
        return true;
    }

    function editar() {
        tableClientes[index] = JSON.stringify({
            codigo: $("#txtCodigo").val(),
            nome: $("#txtNome").val(),
            telefone: $("#txtTelefone").val(),
            email: $("#txtEmail").val(),
            data: tableClientes[index].data
        });
        localStorage.setItem("tableClientes", JSON.stringify(tableClientes));

        alert("Informações editadas.")
        operacao = "A";
        return true;
    }

    function listar() {
    
        $('#tbListar').html('');
        $('#tbListar')
            .html(
                `
                <thead>
                    <tr class="columns">
                        <th class="column">Código</th>
                        <th class="column">Nome</th>
                        <th class="column">Telefone</th>
                        <th class="column">E-mail</th>
                        <th class="column">Data de cadastro</th>
                        <th class="column"></th>
                        <th class="column"></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                `
            );

        //loop para inserir registros
        for (let i in tableClientes) {
            var cliente = JSON.parse(tableClientes[i])
            $('#tbListar tbody').append(
                `<tr>
                    <td>${cliente.codigo}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.data}</td>
                    <td>
                        <img src="../img/icon-update.svg"
                        alt = '${i}'
                        class='btnEditar' 
                        >
                    </td>
                    
                    <td>
                        <img src="../img/icon-delete.svg"
                        alt = '${i}'
                        class='btnExcluir' 
                        >
                    </td>
                </tr>
            `);
        }
    }

    function excluir() {
        tableClientes.splice(index, 1);
        localStorage.setItem("tableClientes", JSON.stringify(tableClientes));
        confirm("Deseja realmente excluir");
        //alert("Registro excluído.");
    }

    function getCliente(propriedade, valor) {
        var cliente = null;
        let serverCliente = localStorage.getItem("tableClientes");
        serverCliente = JSON.parse(serverCliente)
        for (var item in serverCliente) {
            var i = JSON.parse(serverCliente[item]);
            if (parseInt(i[propriedade]) == valor) {
                cliente = i;
                break;
            }
        }
        return cliente;
    }

    listar()

    // Ação com base nos eventos de formulário
    $("#formCadastro").on("submit", function () {
        if (operacao == "A") {
            return adicionar();
        } else
            return editar();
    });

    // Ação com base nos eventos do botão editar
    $("#tbListar").on("click", ".btnEditar", function () {
        operacao = "E";
        index = parseInt($(this).attr("alt"));
        var cli = JSON.parse(tableClientes[index]);
        $("#txtCodigo").val(cli.codigo);
        $("#txtNome").val(cli.nome);
        $("#txtTelefone").val(cli.telefone);
        $("#txtEmail").val(cli.email);
        $("#txtCodigo").attr("readonly", "readonly");
        $("#txtNome").focus();
    });

    // Ação com base nos eventos do botão excluir
    $("#tbListar").on("click", ".btnExcluir", function () {
        index = parseInt($(this).attr("alt"));
        excluir();
        listar();
    });

    // ultimo codigo

    /*  try {
         var ultimo = JSON.parse(tableClientes.slice(-1));
         var ultconv = parseInt(ultimo.codigo); 
         
     } catch (error) {
         console.log('error: ', error)
     }
     
     $("#txtcodigo").val(ultconv+1);
     
     $("#txtnome").change(function () {
         //alert( $( this ).val() );
         var pessoa = $(this).val();
         
         if (pessoa == "Wilson") {
             $("#txtStatus").val('Em aberto');
         } else
         $("#txtStatus").val('Em andamento');
     }); */

});