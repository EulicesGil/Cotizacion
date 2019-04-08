import Producto from './Producto';

export default class Cotizacion {
    constructor(
        public id: Number,
        public cotizacionId: Number,
        public productoId: Number,      
        public cantidad: number       
       ) { }
  }