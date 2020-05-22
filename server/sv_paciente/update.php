<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPaciente = json_decode(file_get_contents("php://input"));
if (!$jsonPaciente) {
    exit("No hay datos");
}
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("UPDATE paciente SET id = ?, nombre = ?, eps = ? , direccion = ?,nombreAcompañante = ?, telefonoAcompañante = ?, antecedentes = ? ");
$resultado = $sentencia->execute([$jsonPaciente->nombre, $jsonPaciente->eps, $jsonPaciente->direccion, $jsonPaciente->nombreAcompañante, $jsonPaciente->telefonoAcompañante, $jsonPaciente->antecedentes, $jsonPaciente->id]);
echo json_encode($resultado);