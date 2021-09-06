class Electrodomestico {
  constructor(consumo, procedencia) {
    this._consumo = consumo;
    this._preocedencia = procedencia;
  }

  get precio() {
    return this.consumo;
  }

  set precio(consumo) {
    this._consumo = consumo;
  }

  get procedencia(){
      return this.procedencia;
  }

  set procedencia(procedencia){
      this._preocedencia =procedencia;
  }

  calcularConsumo(tipoComsumo) {
    var precioConsumo;
    switch (tipoComsumo) {
      case A:
         precioConsumo = 450000; 
        break;
      case B:
        precioConsumo = 350000;
        break;
      case C:
        precioConsumo = 250000;
        break;
      default:
        alert("No es un opcion correcta");
        break;
    }

    return precioConsumo;
  }

  calcularProcedencia(procedencia) {
      var precioProcedencia;
    switch (procedencia) {
      case Nacional: precioProcedencia= 250000;
      break;
      case Internacional:
          precioProcedencia =350000;
          break;
      default: alert("No es una opcion correcta");
    }

    return precioProcedencia;
  }

  calcularprecio(procedencia,consumo) {

    var precioFinal = procedencia + consumo;

  }
}
