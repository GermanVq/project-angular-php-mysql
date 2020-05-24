<?php
Header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonDoctor = json_decode(file_get_contents("php://input"));
if (!$jsonDoctor) {
    exit("No hay datos");
}
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("INSERT INTO doctor(idHospital, nombre, direccion, telefono, tipoSangre, experiencia, fechaNacimiento) values (?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([
                                    $jsonDoctor->idHospital,
                                    $jsonDoctor->nombre,
                                    $jsonDoctor->direccion, 
                                    $jsonDoctor->telefono, 
                                    $jsonDoctor->tipoSangre, 
                                    $jsonDoctor->experiencia,
                                    $jsonDoctor->fechaNacimiento
                                ]);
                        
echo json_encode([
    "resultado" => $resultado,
]);