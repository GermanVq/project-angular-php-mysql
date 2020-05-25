<?php
Header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPaciente = json_decode(file_get_contents("php://input"));
if (!$jsonPaciente) {
    exit("No hay datos");
}
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("INSERT into paciente(nombre, eps, direccion, nombreAcompanante, telefonoAcompanante, antecedentes) values (?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPaciente->nombre,
                                    $jsonPaciente->eps, 
                                    $jsonPaciente->direccion, 
                                    $jsonPaciente->nombreAcompanante, 
                                    $jsonPaciente->telefonoAcompanante,
                                    $jsonPaciente->antecedentes]);

echo json_encode([
    "resultado" => $resultado,
]);