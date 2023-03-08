window.onload = inicializar;

function inicializar() {
    document.getElementById("contenido-Info").onmouseover = function () { mostrarTextoInfo() };
    document.getElementById("contenido-Info").onmouseout = function () { ocultarTextoInfo() };
    document.getElementById("contenido-Skill").onmouseover = function () { mostrarSkillInfo() };
    document.getElementById("contenido-Skill").onmouseout = function () { ocultarSkillInfo() };
    document.getElementById("contenido-Exp").onmouseover = function () { mostrarExpInfo() };
    document.getElementById("contenido-Exp").onmouseout = function () { ocultarExpInfo() };
}


function mostrarTextoInfo() {
    document.getElementById('contenido-Info').innerHTML = "Informacion Personal <br> <br> Tucuman, Argentina <br> LinkedIn : ar.linkedin.com <br> GitHub : github.com <br> Email : sandrabyrd34@gmail.com";
}
function ocultarTextoInfo() {

    document.getElementById('contenido-Info').innerHTML = "Informacion Personal";
}

function mostrarSkillInfo() {
    document.getElementById('contenido-Skill').innerHTML = "Habilidades <br> <br> HTML/CSS <br> JavaScript <br> Phyton <br> React <br> NodeJS";
}
function ocultarSkillInfo() {
    document.getElementById('contenido-Skill').innerHTML = "Habilidades";
}

function mostrarExpInfo() {
    document.getElementById('contenido-Exp').innerHTML = "Experiencias <br> <br> iOS Developer en Social Web Vippter, S.L. (abr.2016 - dic.2017) <br> iOS Developer en Jeffapp (ene.2018 - jul. 2020) <br> Co.Founder en Pilbeo (ago.2019 - actualidad) ";
}
function ocultarExpInfo() {
    document.getElementById('contenido-Exp').innerHTML = "Experiencias";
}
