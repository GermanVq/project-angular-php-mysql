<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../connectdb.php";
$sentencia = $bd->query("SELECT  id, nombre, telefono, direccion, nit, nombrerep from hospital");
$hospital = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($hospital);
?>