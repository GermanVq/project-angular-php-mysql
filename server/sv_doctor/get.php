<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de doctor");
}
$doctores = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("SELECT id, idHospital,nombre, direccion, telefono, tipoSangre, experiencia, fechaNacimiento FROM doctor WHERE id = ?");
$sentencia->execute([$doctores]);
$doctore = $sentencia->fetchObject();
echo json_encode($doctore);