export class Cliente {
    constructor(
        public idCliente: number,
        public nombre: string,
        public clvCliente: string,
        public direccion: string,
        public telefono: string,
        public activo: boolean,
        public ultimaActualizacion: string,
        public fechaCreacion: string,
        public modifico: string

    ) { }
}
