export class Paciente {
    constructor(
        
        public nombre: string,
        public eps: string,
        public direccion: string,
        public nombreAcompanante: string,
        public telefonoAcompanante: string,
        public antecendetes: string,
        public id?: string,
        
    ) { }
}
