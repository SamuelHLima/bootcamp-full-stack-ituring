function buscaSeriado(series, especial) {
    let indice = undefined;
    series.forEach((serie, i) => {
      if (serie === especial) {
        indice = i;
      }
    });
    console.log(indice);
  }
  let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

buscaSeriado(listaSeries, "game")