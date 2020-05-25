export class Triage {
    constructor(
       public idDoctor: string,
       public idPaciente: string,
       public motivo: string,
       public diagnostico: string,
       public requiereMedicina: string,
       public covid: string,
       public tos: boolean,
       public dificultadRespirar: boolean,
       public fiebre: boolean,
       public escalofrio: boolean,
       public temblorEscalofrio: boolean,
       public dolorMuscular: boolean,
       public id?: string,
    ){ }
}
