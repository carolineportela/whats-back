const jsonContatos = require('./contatos.js')

const getPerfilTelefone = (telefone) => {

    let jsonPerfil = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.number == telefone) {
            jsonPerfil = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return jsonPerfil
    } else {
        return status
    }
    
}

module.exports = {
    getPerfilTelefone
}