<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../connectdb.php";
$sentencia = $bd->query("SELECT id, idDoctor, idPaciente, motivo,diagnostico, requiereMedicina, covid, tos, dificultadRespirar, fiebre, escalofrio, temblorEscalofrio, dolorMuscular from triage");
$triage = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($triage);
?>