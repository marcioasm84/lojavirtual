function preencherMarcas(idTabela) {
	var lista = localStorage.getItem('marca');
	if(!lista) return;
	var dados = "";
	lista = JSON.parse(lista);
	for(var i = 0; i < lista.length; i++) {
		dados += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nome + "</td></tr>";
	}
	
	document.getElementById(idTabela).tbody.innerHTML = dados;
}

function salvarMarca(nome) {
	var id = 0;
	var lista = localStorage.getItem('marca');
	if(!lista) {
		lista = [];
	} 
	lista = JSON.parse(lista);
	id = lista.length + 1;
	
	var valor = lista.push({id: id, nome: nome});
	localStorage.setItem('marca', JSON.stringify(valor) );
}

function preencherTipoPeca(idTabela) {
	var lista = localStorage.getItem('tipo_peca');

	var dados = "";
	lista = JSON.parse(lista);
	for(var i = 0; i < lista.length; i++) {
		dados += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nome + "</td></tr>";
	}
	
	document.getElementById(idTabela).body.innerHTML = dados;
}

function salvarTipoPeca(id, nome) {
	var valor = {id: id, nome: nome};
	localStorage.setItem('tipo_peca', JSON.stringify(valor) );
}