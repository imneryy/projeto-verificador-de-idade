function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fAno.value;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "criancaMenino.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "jovemHomem.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "adultoHomem.png");
      } else {
        // Idoso
        img.setAttribute("src", "idosoHomem.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "criancaMenina.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "jovemMulher.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "adultoMulher.png");
      } else {
        // Idoso
        img.setAttribute("src", "idosoMulher.png");
      }
    }
    res.innerHTML = `Detectamos um(a)${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
