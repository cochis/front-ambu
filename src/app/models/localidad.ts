export class Localidad {
    constructor(
        public idLocalidad: number,
        public nombre: string,
        public clvLocalidad: string,
        public direccion: string,
        public telefono: string,
        public coordinador: string,
        public activo: boolean,
        public ultimaActualizacion: string,
        public fechaCreacion: string,
        public clvSitio: string,
        public modifico: string

    ) { }
}
