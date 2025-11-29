
// Este archivo es sólo para dejar una función global de Pesos Chilenos que se usará en todos los demás componentes.
//De esta forma, se convierte todo a pesos chilenos de la forma más optimizada y modularizada posible.

export const clp = (n) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    }).format(n);