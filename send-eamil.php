<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Database configuration
    $host = "your_database_host";     // Replace with your database host
    $username = "your_database_user"; // Replace with your database username
    $password = "your_database_pass"; // Replace with your database password
    $dbname = "your_database_name";   // Replace with your database name

    // Connect to the database
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert form data into the database
    $sql = "INSERT INTO contact_submissions (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Send emails
        $toEmails = array("email1@example.com", "email2@example.com"); // Replace with your recipient email addresses

        $subject = "New Form Submission: $subject";
        $messageBody = "
            <html>
            <body>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong><br>$message</p>
            </body>
            </html>
        ";

        $headers = "From: your_email@example.com" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

        foreach ($toEmails as $toEmail) {
            mail($toEmail, $subject, $messageBody, $headers);
        }

        // Send acknowledgment email
        $acknowledgmentSubject = "Thank you for Your Submission";
        $acknowledgmentMessage = "
            <html>
            <body>
                <p>Dear $name,</p>
                <p>Thank you for submitting the form. We have received the following information:</p>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong><br>$message</p>
                <p>We will get back to you soon.</p>
                <p>Best regards,</p>
                <p>Your Organization</p>
            </body>
            </html>
        ";

        mail($email, $acknowledgmentSubject, $acknowledgmentMessage, $headers);

        http_response_code(200);
        echo json_encode(["message" => "Form data saved and emails sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $conn->error]);
    }

    // Close the database connection
    $conn->close();
} else {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method"]);
}
?>
