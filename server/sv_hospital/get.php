<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de hospital");
}
$hospitales = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("SELECT id, nombre, telefono, direccion, nit, nombrerep FROM hospital WHERE id = ?");
$sentencia->execute([$hospitales]);
$hospital = $sentencia->fetchObject();
echo json_encode($hospital);