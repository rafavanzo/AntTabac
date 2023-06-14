function showOptions() {
    var comparacao = document.getElementById("comparacao").value;
    var opcoes = document.getElementById("opcoes");
  
    opcoes.innerHTML = "";
  
    if (comparacao === "minutos") {
      for (var i = 1; i <= 60; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        opcoes.appendChild(option);
      }
    } else if (comparacao === "horas") {
      for (var i = 1; i <= 24; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        opcoes.appendChild(option);
      }
    } else if (comparacao === "dias") {
      for (var i = 1; i <= 365; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        opcoes.appendChild(option);
      }
    } else if (comparacao === "meses") {
      for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        opcoes.appendChild(option);
      }
    } else if (comparacao === "anos") {
      for (var i = 1; i <= 30; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        opcoes.appendChild(option);
      }
    }
  
    opcoes.style.display = "block";
  }
  