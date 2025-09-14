// Tu código aquí
const precioBase = 45.99;
const impuesto = 0.15; // 15%
const tieneDescuento = true;
// Calcula el precio final aquí...
// Si tiene descuento, aplica un 10%
// El resultado debe ser un string como: "El precio total es de $XX.XX"
let precioFinal = precioBase + (precioBase * impuesto);
let precioConDescuento = precioFinal - (precioFinal * 0.10);
console.log(`El precio total es de ${precioConDescuento}`)