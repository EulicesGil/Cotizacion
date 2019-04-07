export default class Producto {
    constructor(
        public id: Number,
        public tipoProductoId: Number,
        public proveedorId: Number,
        public nombre: String,
        public descripcion: String,
        public precio: number,
        public porcentaje: Number,
        public estado: String,
        public fechaRegistro: Date,
        public fechaModificacion: Date,
        public urlImg: String
       ) { }
  }