<?php
// Fetching Values From URL
$sendUsername = $_POST['username'];
$sendEmail = $_POST['email'];
$sendPassword = $_POST['password'];
$sendRealm = $_POST['realm'];
$sendClass = $_POST['class'];
$sendExperience = $_POST['experience'];
$sendRate = $_POST['rate'];
$sendMessage = $_POST['message'];

// DB creditentials
$servername = "localhost";
$username = "desyweb_nenwow";
$password = "password";
$dbname = "desyweb_nenwow";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// insert into DB
$sql = "insert into user_info(username, email, password, realm, class, experience, rate, message) values ('$sendUsername', '$sendEmail', '$sendPassword','$sendRealm', '$sendClass', '$sendExperience', '$sendRate','$sendMessage')";

if ($conn->query($sql) === TRUE) { //success/faill message
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
// close DB connection

?>