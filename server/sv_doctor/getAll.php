<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../connectdb.php";
$sentencia = $bd->query("SELECT id, idHospital,nombre, direccion, telefono, tipoSangre, experiencia, fechaNacimiento from doctor");
$doctor = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($doctor);
?>