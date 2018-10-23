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
	$start=gF("start");
	$end=gF("end");


	$dirupload = "upload/";
	clear_old_files($dirupload);

	$fileName = $dirupload.$fileName;
	$tmp = $dirupload.$tmp;

	if ($start) {
//������ ������� - ������� ������� ������ ���� ���� ����
		unlink($tmp);
	} else if ($end) {
//��������� ������� - ������ �������� ����
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


function sendftp($fileName,$log,$pass,$host,$dir,$pm) {

	$err = '';

	$fp = fopen($fileName, 'r');

	if (!$fp) {
		$err = 'Error read '.$fileName.' fot send';
		return $err;
	}

	$conn_id = ftp_connect($host); 

	if (!$conn_id) {
		$err = 'Error: can not connect to server '.$host;
		return $err;
	}

	$login_result = ftp_login($conn_id, $log, $pass); 
	if (!$login_result) {
		$err = 'Error: can not login to server '.$host;
		return $err;
	}

	if ($pm) {
		ftp_pasv($conn_id, true);
	}

	if ($dir) {
		if (!(ftp_chdir($conn_id, $dir))) {
			$err = 'Error: can not change dir '. $dir .' on server '.$host;
		}
	}

	ftp_close($conn_id);


}



exit;
?>