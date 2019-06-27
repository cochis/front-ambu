export class Sitio {
    constructor(
        public idSitio: number,
        public nombre: string,
        public clvSitio: string,
        public direccion: string,
        public telefono: string,
        public activo: boolean,
        public fechaCreacion: string,
        public ultimaActualizacion: string,
        public modifico: string

    ) { }
}
