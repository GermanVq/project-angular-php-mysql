<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de paciente");
}
$idPaciente = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("SELECT id, nombre, eps, direccion, nombreAcompanante, telefonoAcompanante, antecedentes FROM paciente WHERE id = ?");
$sentencia->execute([$idPaciente]);
$paciente = $sentencia->fetchObject();
echo json_encode($paciente);