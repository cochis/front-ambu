export class FormularioRegistro {
    constructor(
        public idFormularioRegistro: number,
        public nombre: string,
        public clvFormularioRegistro:string,
        public clvTipoCampo: string,
        public requerido: boolean,
        public tamano: string,
        public activo: boolean,
        public ultimaActualizacion: string,
        public fechaCreacion: string,
        public modifico: string

    ) { }
}
