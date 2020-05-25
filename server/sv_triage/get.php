<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id"])) {
    exit("No hay id de triage");
}
$idTriage = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("SELECT id, idDoctor, idPaciente, motivo,diagnostico, requiereMedicina, covid, tos, dificultadRespirar, fiebre, escalofrio, temblorEscalofrio, dolorMuscular FROM triage WHERE id = ?");
$sentencia->execute([$idTriage]);
$triage = $sentencia->fetchObject();
echo json_encode($triage);