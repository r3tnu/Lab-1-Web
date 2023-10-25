<?php
function isInArea($x, $y, $r) {
    $topRight = $x >= 0 && $y >= 0 && $y <= -$y + $r/2;
    $topLeft = $x <= 0 && $y >= 0 && $y <= sqrt($r*$r-$x*$x);
    $bottomLeft = $x <= 0 && $y <= 0 && $x >= -$r && $y >= -$r;
    return $topRight || $topLeft || $bottomLeft;
}

function validateInput($x, $y, $r) {
    if (is_numeric($x) && is_numeric($y) && is_numeric($r)) {
        if (in_array($x, [-3, -2, -1, 0, 1, 2, 3, 4, 5]) &&
            $y <= 3 && $y >= -5 &&
            $r <= 5 && $r >= 2) {
            return true;
        }
    }
    return false;
}

session_start();

date_default_timezone_set('Europe/Moscow');
$startTime = microtime(true);

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    http_response_code(405);
    return;
}


$x = isset($_GET["X"]) ? $_GET["X"] : null;
$y = isset($_GET["Y"]) ? $_GET["Y"] : null;
$r = isset($_GET["R"]) ? $_GET["R"] : null;

if (validateInput($x, $y, $r)) {
    $isInArea = isInArea($x, $y, $r);

    $currentTime = date("Y-m-d H:i:s");
    $endTime = microtime(true);
    $executionTime = number_format($endTime - $startTime, 6);
    $GLOBALS["result"] = array($x, $y, $r, $isInArea, $currentTime, $executionTime);
    include ('resultTable.php');
}

?>