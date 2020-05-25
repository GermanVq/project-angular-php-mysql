<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];

if (empty($_GET["id"])) {
    exit("No hay id de triage para eliminar");
}

$id_triage = $_GET["id"];

$db = include_once "../connectdb.php";
$sentencia = $db->prepare("DELETE FROM triage WHERE id = ?");
$resultado = $sentencia->execute([$id_triage]);
echo json_encode($resultado);