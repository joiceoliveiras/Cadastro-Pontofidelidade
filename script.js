function salvarDados(event) {
    event.preventDefault(); 
 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
 
    
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('data_nascimento', dataNascimento);
 
   
    window.location.href = 'preferencias.html';
 }
 
 function salvarPreferencias(event) {
    event.preventDefault(); 
 
    const categorias = document.getElementById('categorias').value;
    const frequencia = document.getElementById('frequencia').value;
 
 
    localStorage.setItem('categorias', categorias);
    localStorage.setItem('frequencia', frequencia);
 
    
    window.location.href = 'informacoes.html';
 }
 
 function salvarInformacoesAdicionais(event) {
    event.preventDefault(); 
 
    const comoConheceu = document.getElementById('como_conheceu').value;
    const promocoes = document.getElementById('promocoes').checked;
 
   
    localStorage.setItem('como_conheceu', comoConheceu);
    localStorage.setItem('promocoes', promocoes);
 
   
    window.location.href = 'revisao.html';
 }
 
 function preencherResumo() {
    document.getElementById('resumoNome').innerText = localStorage.getItem('nome');
    document.getElementById('resumoEmail').innerText = localStorage.getItem('email');
    document.getElementById('resumoData').innerText = localStorage.getItem('data_nascimento');
    document.getElementById('resumoCategorias').innerText = localStorage.getItem('categorias');
    document.getElementById('resumoFrequencia').innerText = localStorage.getItem('frequencia');
    document.getElementById('resumoComoConheceu').innerText = localStorage.getItem('como_conheceu');
 }
 
 function finalizarCadastro() {
    
    window.location.href = 'sucesso.html';
 }
 