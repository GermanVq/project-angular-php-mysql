<?php

define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','dblaboratorio');

function connect_db(){

    $connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

    if(mysqli_connect_errno($connect)){
        die("Fallo la conexion a la bd dblaboratorio".mysqli_connect_errno());
    }

    return $connect;

}

$con = connect_db();

?>