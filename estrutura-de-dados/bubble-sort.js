const valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const bubbleSort = () => {
  let inicio = 0;
  let fim = valores.length - 1;
  let tmp;

  for (vezes = 0; vezes <= fim; vezes++) {
    for (pos = inicio; pos <= fim - vezes; pos++) {
      if (valores[pos] > valores[pos + 1]) {
        tmp = valores[pos];
        valores[pos] = valores[pos + 1];
        valores[pos + 1] = tmp;
      }
    }
  }
};

bubbleSort();
console.log("ordenando valores...");
console.log(valores);
