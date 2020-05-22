<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonMascota = json_decode(file_get_contents("php://input"));
if (!$jsonMascota) {
    exit("No hay datos");
}
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("insert into mascotas( nombre, eps, direccion, nombreAcompañante, telefonoAcompañante, antecedentes) values (?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPaciente->nombre, $jsonPaciente->eps, $jsonPaciente->direccion, $jsonPaciente->nombreAcompañante, $jsonPaciente->telefonoAcompañante, $jsonPaciente->antecedentes]);
echo json_encode([
    "resultado" => $resultado,
]);