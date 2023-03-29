/* var frutas, text, fLen, i;
frutas = ["Banana", "Laranja", "Maça", "Manga"];
fLen = frutas.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + frutas[i] + "</li>";
}*/


function calcular()
{
        var txtv = window.document.querySelector('input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number (txtv.value)
        res.innerHTML = `<p>A sua velicidade atual é de <strong>${vel}</strong>Km/h</p>`
        if (vel > 100)
        {
        res.innerHTML += `<p>Você foi multado por excesso de velocidade!</p>`
        }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
    }
/*
    window.alert("minha primeira mensagem.") //Este é meu primeiro comentário em java.
    window.confirm("Está gostando de JS?") //Janela com botão ok e cancelar
    window.prompt("Qual o seu nome?") //vai perguntar o nome
*/
var a = window.document.getElementById("area")
    a.addEventListener ('click', clicou)
    a.addEventListener ('mouseenter', entrou)
    a.addEventListener ('mouseout' , saiu)

function clicou () {
    a.innerText = 'Clicou'
    a.style.background = "red"
}
function entrou () {
    a.innerText = 'Entrou'
}
function saiu(){
    a.innerText = 'Saiu'
    a.style.background = 'green'
}
function somar () 
{
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number (tn1.value)
    var n2 = Number (tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2}  é igual a <strong>${s}</strong>`
}

function site002()
{
    var msg = window.document.getElementById ("mensagem")
    var saud = window.document.getElementById("saudacao")
    var img = window.document.getElementById ("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes ()
    mensagem.innerHTML = `Bem vindo, agora são ${hora}:${minuto} horas  `
    
    if (hora >= 0 && hora < 12) 
    {
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background ='#705530'
        saud.innerHTML = 'Bom Dia.'
    } 
    
    else if (hora >= 12 && hora <= 18) 
    {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#eccd95'
        saud.innerHTML = 'Boa tarde.'
    } 
    
    else 
    {
        //BOA NOITE
        img.src = "imagens/noite.png"
        document.body.style.background = "#56412e"
        saud.innerHTML = 'Boa noite.'

    }
}

function verificar()
{
    var data = new Date()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano)
        {
        window.alert ('[ERRO] Verifique Novamente os dados')
        }
         else {
    var fsex = document.getElementsByName ("radsex")
    var idade = ano - Number(fano.value)
    var genero = ''
    if (fsex[0].checked) {
        genero = 'um homem'
    } else if (fsex[1].checked) {
        genero = 'uma mulher'
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}
}