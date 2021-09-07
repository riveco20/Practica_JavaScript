class Electrodomestico {
  constructor(consumo, procedencia) {
    this._consumo = consumo;
    this._procedencia = procedencia;
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

  calcularConsumo() {
    var precioConsumo;
    switch (this._consumo) {
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

  calcularProcedencia() {
      var precioProcedencia;
    switch (this._preocedencia) {
      case Nacional: precioProcedencia= 250000;
      break;
      case Internacional:
          precioProcedencia =350000;
          break;
      default: alert("No es una opcion correcta");
    }

    return precioProcedencia;
  }

  calcularprecio() {

    var precioProcedencia = this.calcularProcedencia(procedencia);
    var precioConsumo = this.calcularConsumo(consumo);

    var precioFinal = precioProcedencia + precioConsumo;

    return precioFinal;

  }
}
