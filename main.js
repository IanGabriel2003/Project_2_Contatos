const form = document.getElementById('form')
const nomes = []
const emails = []
const telefones = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')

    if (nomes.includes(nome.value)) {
        alert(`O nome ${nome.value} já foi inserido`)
    } else if (emails.includes(email.value)) {
        alert(`O nome ${email.value} já foi inserido`)
        } else if (telefones.includes(telefone.value)) {
            alert(`O nome ${telefone.value} já foi inserido`)
        } else {
        nomes.push(nome.value)
        emails.push(emails.value)
        telefones.push(parseFloat(telefones.value))

        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${sobrenome.value}</td>`
        linha += `<td>${email.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '<tr>'

        linhas += linha
    }

    nome.value = ''
    sobrenome.value =  ''
    email.value = ''
    telefone.value = ''
}

function atualizaTabela() {
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhas
}