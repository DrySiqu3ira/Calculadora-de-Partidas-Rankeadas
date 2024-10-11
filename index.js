function calcularRankeadas(vitorias, derrotas) {
  if (
    typeof vitorias !== "number" ||
    typeof derrotas !== "number" ||
    vitorias < 0 ||
    derrotas < 0
  ) {
    return "Erro: vitórias e derrotas devem ser números não negativos.";
  }

  let saldo = vitorias - derrotas;
  let nivel = "";

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}.`;
}

console.log(calcularRankeadas(70, 50));
console.log(calcularRankeadas(81, 40));
console.log(calcularRankeadas(100, 90));
console.log(calcularRankeadas(-5, 10));
console.log(calcularRankeadas(150, 100));
