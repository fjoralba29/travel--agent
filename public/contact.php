<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$allowedOrigins = [
    'https://reise-genie.de',
    'https://www.reise-genie.de',
    'http://localhost:3000',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'invalid_payload']);
    exit;
}

function field(array $data, string $key): string
{
    return trim((string)($data[$key] ?? ''));
}

$firstName = field($data, 'firstName');
$lastName  = field($data, 'lastName');
$email     = field($data, 'email');
$phone     = field($data, 'phone');
$regarding = field($data, 'regarding');
$message   = field($data, 'message');

if ($firstName === '' || $lastName === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'missing_fields']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'invalid_email']);
    exit;
}

$to      = 'olesja@reise-genie.de';
$subject = '=?UTF-8?B?' . base64_encode('Anfrage: ' . ($regarding !== '' ? $regarding : 'Reiseanfrage')) . '?=';
$body    =
    "Name: $firstName $lastName\n" .
    "E-Mail: $email\n" .
    "Telefon: " . ($phone !== '' ? $phone : '-') . "\n\n" .
    $message;

$headers = "From: Reise Genie Kontaktformular <olesja@reise-genie.de>\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'send_failed']);
}