export class Doctor {
    constructor(
        public nombre: string,
        public direccion: string,
        public telefono: string,
        public tipoSangre: string,
        public experiencia: string,
        public fechaNacimeinto: Date,
        public idHospital: string,
        public id?: string,
        
    ) { }
}
