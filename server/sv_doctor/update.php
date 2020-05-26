<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonDoctor = json_decode(file_get_contents("php://input"));
if (!$jsonDoctor) {
    exit("No hay datos");
}
if (empty($_GET["id"])) {
    exit("No hay id de Doctor para eliminar");
}

$id = $_GET["id"];
$bd = include_once "../connectdb.php";
$sentencia = $bd->prepare("UPDATE doctor SET idHospital =?, nombre = ?, direccion = ? , telefono = ?, tipoSangre = ?, experiencia = ?, fechaNacimiento = ? where id = $id");
$resultado = $sentencia->execute([
                                    $jsonDoctor->idHospital,    
                                    $jsonDoctor->nombre,
                                    $jsonDoctor->direccion, 
                                    $jsonDoctor->telefono, 
                                    $jsonDoctor->tipoSangre, 
                                    $jsonDoctor->experiencia,
                                    $jsonDoctor->fechaNacimiento,
                                    ]);
echo json_encode($resultado);