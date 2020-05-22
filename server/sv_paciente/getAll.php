<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../connectdb.php";
$sentencia = $bd->query("select id, nombre, eps, direccion, nombreAcompañante, telefonoAcompañante, antecedentes from paciente");
$paciente = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($paciente);