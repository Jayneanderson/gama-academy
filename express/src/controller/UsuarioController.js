const Yup = require('yup');
const Usuario = require('../models/Usuario.js');
const alert = require('alert');


class UsuarioController {
    async store(request, response) {

        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().email().required(),
            telefone: Yup.string().required(),
            sexo: Yup.string().oneOf(['feminino', 'masculino']),
            genero: Yup.string().oneOf(['transgênero', 'cisgênero', 'não-binário', 'prefiro não informar']),
            isEstudante: Yup.string().required(),         
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'A validação dos campos falhou. Verifique o preenchimento dos campos.' })
        }

        const usuarioExiste = await Usuario.findOne({ where: { email: request.body.email }})

        if(usuarioExiste) {
            return response.status(400).json({ error: 'Usuário já existe.' })
        }

        try {
            await Usuario.create(request.body);
            alert('Usuário cadastrado');
            response.redirect('/');
        } catch (error) {
            response.status(400);
        }
    }
}

module.exports = new UsuarioController();
