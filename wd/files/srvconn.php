<?php

	if ($_SERVER["HTTP_REFERER"] != 'http://cdn.pt.forgeofempires.com/swf/Main.swf?2345474885') {
		echo '200';
		exit;
	}

	if (preg_match('/^[\w\.\-]+\.((zip)|(csv)|(html)|(xml))$/i', $_GET['fileName'], $match) <= 0) {
//������ ����������� ���� ������ � ��������� ������ � �������� (��������� ����� ����� ����� ���� �������������)
		echo '200';
		exit;
	}

	if (preg_match('/^[\w\-]+$/i', $_GET['tmp'], $match) <= 0) {
//� �������� ��������� ������ - ��������� ����� �����, ����� ���� � �������������
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


	$dirupload = "upload/";
	clear_old_files($dirupload);

	$filename = $dirupload.$fileName;
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

	$expire_time = 300; // ����� ����� ������� ���� ��������� ���������� (� ���.)

// ���������, ��� $dir - �������
	if (is_dir($dir)) {
// ��������� �������
		if ($dh = opendir($dir)) {
// ������ � ������� ��� ��������
// �� ������� �� ����������
			while (($file = readdir($dh)) !== false) {

// ������� �����
				$time_sec=time();
// ����� ��������� �����
				$fullfile = $dir . $file
				$time_file=filemtime($fullfile);
// ����� ������ ������� ������ ������� (� ��������)
				$time=$time_sec-$time_file;

				$unlink = $fullfile;

				if (is_file($unlink)){
					if ($time>$expire_time){
//						unlink($unlink);
echo $unlink;
					}

				}
			}
// ��������� �������
			closedir($dh);
		}
	}

}

function gF ($s) { 
	$s = substr( ($_GET[$s]), 0, 500);
	return $s;
}



exit;
?>