<?php

$filename = 'last_fuck.json';

$json = json_encode(date('Y-m-d'));

if (!$fp = fopen($filename, 'w+')) {
    echo "Cannot open file ($filename)";
    exit;
}

fwrite($fp, $json);

echo file_get_contents($filename);

?>