<?php
$config = require 'database.php';

$dsn = "mysql:host=" . $config['database']['host'] . ";dbname=" . $config['database']['db'];
$username = $config['database']['username'];
$password = $config['database']['password'];

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Kļūda pieslēdzoties datu bāzei: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = trim($_POST['first_name']);
    $last_name = trim($_POST['last_name']);
    $phone = trim($_POST['phone']);
    $personal_code = trim($_POST['personal_code']);

    $sql = "INSERT INTO users (first_name, last_name, phone, personal_code) VALUES (:first_name, :last_name, :phone, :personal_code)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':first_name', $first_name);
    $stmt->bindParam(':last_name', $last_name);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':personal_code', $personal_code);
    
    try {
        $stmt->execute();
        echo "Dati veiksmīgi pievienoti!";
    } catch (PDOException $e) {
        echo "Kļūda pievienojot datus: " . $e->getMessage();
    }
}
?>
