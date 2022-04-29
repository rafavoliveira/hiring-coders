const valores = [2, 8, 11, 13, 18, 25, 50, 68, 75, 81, 98];

const buscaBin = (num) => {
  let inicio, fim;
  let meio;
  inicio = 0;
  fim = valores.length - 1;
  while (inicio <= fim) {
    meio = parseInt(inicio + fim) / 2;
    if (num == valores[meio]) {
      return meio;
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  }
  return -1;
};

console.log(buscaBin(11));
