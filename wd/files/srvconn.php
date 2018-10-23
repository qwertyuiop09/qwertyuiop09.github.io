<?php



	if (preg_match('/^[\w\.\-]+\.((zip)|(csv)|(html)|(xml))$/i', $_GET['fileName'], $match) <= 0) {
//только разрешенные типы файлов и отсутсвие слешей в названии (англицкие буквы цифры точки тире подчеркивания)
		exit;
	}

	if (preg_match('/^[\w\-]+$/i', $_GET['tmp'], $match) <= 0) {
//в названии временных файлов (англицкие буквы цифры, можно тире и подчеркивания)
		exit;
	}



	$dirupload = "upload/";
//	clear_old_files($dirupload);

	$filename = "upload/".$_GET['tmp'];
	$filename = "upload/".$_GET['fileName'];

	if ($_GET['fileName'] && $_GET['start']) {
		unlink($filename);
	}

if ($_GET['fileName'] && $_GET['end']) {
//	unlink($filename);

//goto ftp

	exit;
}


//     $filename = "upload/".$_GET['fileName'].'tmp';
     $filename = "upload/".$_GET['fileName'];
//	unlink($filename);
     //$filename = "upload/".$_GET['fileName']."_".$_GET['nocache'];
     $xmlstr = $GLOBALS['HTTP_RAW_POST_DATA'];
     if(empty($xmlstr)){
             $xmlstr = file_get_contents('php://input');
     }
     $is_ok = false;

            $file = fopen($filename,"ab");

            if(flock($file,LOCK_EX)){
                    fwrite($file,$xmlstr);
//echo $xmlstr;
                    flock($file,LOCK_UN);
                    fclose($file);
	}




function clear_old_files($dir){

	$expire_time = 300; // Время через которое файл считается устаревшим (в сек.)

// проверяем, что $dir - каталог
	if (is_dir($dir)) {
// открываем каталог
		if ($dh = opendir($dir)) {
// читаем и выводим все элементы
// от первого до последнего
			while (($file = readdir($dh)) !== false) {

// текущее время
				$time_sec=time();
// время изменения файла
				$fullfile = $dir . $file
				$time_file=filemtime($fullfile);
// тепрь узнаем сколько прошло времени (в секундах)
				$time=$time_sec-$time_file;

				$unlink = $fullfile;

				if (is_file($unlink)){
					if ($time>$expire_time){
						unlink($unlink);
					}

				}
			}
// закрываем каталог
			closedir($dh);
		}
	}

}




exit;
?>