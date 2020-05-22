<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["id"])) {
    exit("No hay id de mascota para eliminar");
}
$idMascota = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("DELETE FROM paciente WHERE id = ?");
$resultado = $sentencia->execute([$id]);
echo json_encode($resultado);