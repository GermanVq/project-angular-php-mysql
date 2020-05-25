<?php
Header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonTriage = json_decode(file_get_contents("php://input"));
if (!$jsonTriage) {
    exit("No hay datos");
}
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("INSERT into triage(idDoctor, idPaciente, motivo, diagnostico, requiereMedicina, covid, tos, dificultadRespirar, fiebre, escalofrio, temblorEscalofrio, dolorMuscular) values (?,?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([
                                    $jsonTriage->idDoctor,    
                                    $jsonTriage->idPaciente,
                                    $jsonTriage->motivo, 
                                    $jsonTriage->diagnostico, 
                                    $jsonTriage->requiereMedicina, 
                                    $jsonTriage->covid,
                                    $jsonTriage->tos,
                                    $jsonTriage->dificultadRespirar,
                                    $jsonTriage->fiebre,
                                    $jsonTriage->escalofrio,
                                    $jsonTriage->temblorEscalofrio,
                                    $jsonTriage->dolorMuscular,
                                ]);

echo json_encode([
    "resultado" => $resultado,
]);