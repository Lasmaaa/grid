<?php

$apiKey = "https://emo.lv/weather-api/forecast/?city=cesis,latvia";
$apiUrl = "https://emo.lv/weather-api/forecast/?city=cesis,latvia&api_key={$apiKey}";
$response = file_get_contents($apiUrl);
if ($response === FALSE) {
    echo "Neizdevās ielādēt laikapstākļus.";
    exit;
}
$data = json_decode($response, true);

if (isset($data['list'][0])) {
    $current = $data['list'][0];
    $temp = $current['temp']['day'];
    $desc = $current['weather'][0]['description'];
} else {
    echo "Nav pieejami laikapstākļu dati.";
    exit;
}
?>