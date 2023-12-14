<?php 
//Prelevare dati dal file
$string = file_get_contents("dischi.json");
//var_dump($string);

// Trasformare stringa in array
$dischi = json_decode($string, true);
//var_dump($dischi);

// Trasformare array in stringa
$json = json_encode($dischi);

// Invio dati al client
header("Content-Type: application/json");
echo $json;
?>