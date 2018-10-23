<?php

	if ($_SERVER["HTTP_REFERER"] != 'http://cdn.pt.forgeofempires.com/swf/Main.swf?2345474885') {
		echo '200';
		exit;
	}

	if (preg_match('/^[\w\.\-]+\.((zip)|(csv)|(html)|(xml))$/i', $_GET['fileName'], $match) <= 0) {
//только разрешенные типы файлов и отсутсвие слешей в названии (англицкие буквы цифры точки тире подчеркивани€)
		echo '200';
		exit;
	}

	if (preg_match('/^[\w\-]+$/i', $_GET['tmp'], $match) <= 0) {
//в названии временных файлов - англицкие буквы цифры, можно тире и подчеркивани€
		echo '200';
		exit;
	}

	$fileName=gF("fileName");
	$tmp=gF("tmp");
	$log=gF("log");
	$pass=gF("pass");
	$host=gF("host");
	$dir=gF("dir");
	$pm=gF("pm");
	$start=gF("start");
	$end=gF("end");


	$dirupload = "upload/";
	clear_old_files($dirupload);

	$fileName = $dirupload.$fileName;
	$tmp = $dirupload.$tmp;

	if ($start) {
//перва€ команда - сначала удалить старый файл если есть
		unlink($tmp);
	} else if ($end) {
//последн€€ команда - просто передать файл
		rename($tmp, $fileName);
		$err = sendftp($fileName,$log,$pass,$host,$dir,$pm);
		if ($err) {
			echo $err;
		}
		unlink($fileName);
		exit;
	}
	$xmlstr = $GLOBALS['HTTP_RAW_POST_DATA'];
	if(empty($xmlstr)){
		$xmlstr = file_get_contents('php://input');
	}

	$file = fopen($tmp,"ab");

	if(flock($file,LOCK_EX)){
		fwrite($file,$xmlstr);
		flock($file,LOCK_UN);
		fclose($file);
	}




function clear_old_files($dir){

	$expire_time = 300; // ¬рем€ через которое файл считаетс€ устаревшим (в сек.)

// провер€ем, что $dir - каталог
	if (is_dir($dir)) {
// открываем каталог
		if ($dh = opendir($dir)) {
// читаем и выводим все элементы
// от первого до последнего
			while (($file = readdir($dh)) !== false) {

// текущее врем€
				$time_sec=time();
// врем€ изменени€ файла
				$fullfile = $dir . $file
				$time_file=filemtime($fullfile);
// тепрь узнаем сколько прошло времени (в секундах)
				$time=$time_sec-$time_file;

				$unlink = $fullfile;

				if (is_file($unlink)){
					if ($time>$expire_time){
//						unlink($unlink);
echo $unlink;
					}

				}
			}
// закрываем каталог
			closedir($dh);
		}
	}

}

function gF ($s) { 
	$s = substr( ($_GET[$s]), 0, 500);
	return $s;
}


function sendftp($fileName,$log,$pass,$host,$dir,$pm) {

	$fp = fopen($fileName, 'r');
}



exit;
?>