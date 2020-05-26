<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonPaciente = json_decode(file_get_contents("php://input"));
if (!$jsonPaciente) {
    exit("No hay datos");
}
if (empty($_GET["id"])) {
    exit("No hay id de paciente para eliminar");
}

$id = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("UPDATE paciente SET nombre = ?, eps = ? , direccion = ?,nombreAcompanante = ?, telefonoAcompanante = ?, antecedentes = ? where id = $id");
$resultado = $sentencia->execute([$jsonPaciente->nombre,
                                    $jsonPaciente->eps, 
                                    $jsonPaciente->direccion, 
                                    $jsonPaciente->nombreAcompanante, 
                                    $jsonPaciente->telefonoAcompanante,
                                    $jsonPaciente->antecedentes,
                                    $jsonPaciente->id]);
echo json_encode($resultado);