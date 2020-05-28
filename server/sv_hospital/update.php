<?php  
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../connectdb2.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $contents = file_get_contents("php://input");   
    $request = json_decode($contents,true);  
    $nombre = $request["nombre"];
    $telefono = $request["telefono"];
    $direccion = $request["direccion"];
    $in_nit = $request["nit"];
    $in_nombrerep = $request["nombrerep"];
    $in_id = $request["id"];


    // verifica que no esten vacio los campos
    if(!empty($nombre) && !empty($direccion) && !empty($telefono) && !empty($nit) && !empty($nombrerep)){
        // Prepare an insert statement
        $sql = "UPDATE hospital SET nombre=?, telefono=?, direccion=?, nit=?, nombrerep=?  where id =?";
        

        if($stmt = mysqli_prepare($con, $sql)){
            // asignar parametros
            mysqli_stmt_bind_param($stmt, "ssi", $param_nombre,
                                                $param_telefono,                       $param_direccion,  
                                                $param_nit, 
                                                $param_nombrerep,
                                                $param_id,);
            
            //asignar valor a los parametros
            $param_id =$id;
            $param_nombre = $nombre;
            $param_telefono = $telefono;
            $param_direccion = $direccion;
            $param_nit = $nit;
            $param_nombrerep = $nombrerep;
            

            
            // ejecutar sentencia
            if(mysqli_stmt_execute($stmt)){
                
                http_response_code(200);
            } else{
                http_response_code(400);
            }


        }
        mysqli_stmt_close($stmt);
    }
    
    mysqli_close($con);

    
    class Result {}

    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos modificados';

    header('Content-Type: application/json');
    echo json_encode($response);  
    

}else{
    echo "no fue posible realizar la edicion";
}

?>