function gerarNumeroContido(min, max, array) {
  const aleatorio = parseInt(Math.randon() * (max + 1 - min)) + min;
  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio;
}

function gerarNumeros(quantidade) {
  const numeros = Array(quantidade)
  .fill(0)
  .reduce((nums) => {
      const novoNumero = gerarNumerosNaoContido(1, 60, nums)
      return [...nums, novoNumero]
  }, [])

  return numeros;
}

console.log(gerarNumeros(7));
