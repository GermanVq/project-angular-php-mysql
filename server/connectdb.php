<?php
$contraseña = "";
$usuario = "root";
$nombredb = "dblaboratorio";
try {
    return new PDO('mysql:host=localhost;dbname=' . $nombredb, $usuario, $contraseña);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}
