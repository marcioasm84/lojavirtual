document.getElementById("salvarButton").addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    
    if (nome === "") {
      alert("Informe o Nome");
    } else {
      alert("Tipo de marca salvo com sucesso");
    }
  });
  