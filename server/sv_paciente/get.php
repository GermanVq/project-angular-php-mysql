<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de mascota");
}
$idPaciente = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("select id, nombre, raza, edad from mascotas where id = ?");
$sentencia->execute([$idPaciente]);
$paciente = $sentencia->fetchObject();
echo json_encode($paciente);