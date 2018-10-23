<?php

error_reporting( E_ERROR );


	if ($_SERVER["HTTP_REFERER"] != 'http://cdn.pt.forgeofempires.com/swf/Main.swf?2345474885') {
		echo '200 Ok.';
		exit;
	}

	if (preg_match('/^[\w\.\-]+\.((zip)|(csv)|(html)|(xml))$/i', $_GET['fileName'], $match) <= 0) {
//������ ����������� ���� ������ � ��������� ������ � �������� (��������� ����� ����� ����� ���� �������������)
		echo '200 Ok..';
		exit;
	}

	if (preg_match('/^[\w\-]+$/i', $_GET['tmp'], $match) <= 0) {
//� �������� ��������� ������ - ��������� ����� �����, ����� ���� � �������������
		echo '200 Ok...';
		exit;
	}

	$fileName=gF("fileName");
	$tmp=gF("tmp");
	$log=gF("log");
	$pass=gF("pass");
	$host=gF("host");
	$dir=gF("dir");
	$pm=gF("pm");
	$ssl=gF("ssl");
	$start=gF("start");
	$end=gF("end");


	$dirupload = "upload/";
	clear_old_files($dirupload);

	$tmp = $dirupload.$tmp;

	if ($start) {
//������ ������� - ������� ������� ������ ���� ���� ����
		if (file_exists($tmp))
			unlink($tmp);
	} else if ($end) {
//��������� ������� - ������ �������� ����
		$err = sendftp($tmp,$fileName,$log,$pass,$host,$dir,$pm,$ssl);
		if ($err) {
			echo $err;
		}
		if (file_exists($tmp))
			unlink($tmp);
		exit;
	}
	$xmlstr = file_get_contents('php://input');
	if(empty($xmlstr)){
		$xmlstr = $GLOBALS['HTTP_RAW_POST_DATA'];
	}

	if(empty($xmlstr)){
		echo 'Error: not found data';
		exit;
	}

	$file = fopen($tmp,"ab");

	if(flock($file,LOCK_EX)){
		fwrite($file,$xmlstr);
		flock($file,LOCK_UN);
		fclose($file);
	}

	exit;


function clear_old_files($dir){

	$expire_time = 3600; //1 ��� // ����� ����� ������� ���� ��������� ���������� (� ���.)


	if (!$dir) {
		return;
	}


	if (preg_match('/^([a-zA-Z]+[\w\.\-]*\/?)$/i', $dir, $match) <= 0) {
//������ ���� ���� �� ���� ������ � ��� ������ ������ � � ������
//������ ������������� ������� ����� ���� ������� � $dir
//�������� �� ���������� �������� ���-�� ������ ��� �������� ��������� $dir
		return;
	}




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
				$fullfile = $dir . $file;
				$time_file=filemtime($fullfile);
// ����� ������ ������� ������ ������� (� ��������)
				$time=$time_sec-$time_file;

				$unlink = $fullfile;

				if (is_file($unlink)){
					if ($time>$expire_time){
						unlink($unlink);
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




function sendftp($tmp,$fileName,$log,$pass,$host,$dir='',$pm=0,$ssl=0) {

	$err = '';


	if ($ssl) {
		$conn_id = ftp_ssl_connect($host); 
	} else {
		$conn_id = ftp_connect($host); 
	}

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
			ftp_close($conn_id);
			return $err;
		}
	}


	ftp_delete($conn_id, $fileName);
//	ftp_rename($conn_id, $fileName, $fileName.'.old');


// �������� ����� 
//����� ftp_put ������ ����� ���� ������ ����� ������ ����� � ����� ����� �� ������
//����� �� �������� ftp_size ��� ftp_nlist
	$checkload = ftp_put($conn_id, $fileName, $tmp, FTP_BINARY);

	ftp_close($conn_id);


	if (!$checkload) {

		if ($ssl) {
			$conn_id = ftp_ssl_connect($host); 
		} else {
			$conn_id = ftp_connect($host); 
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
				ftp_close($conn_id);
				return $err;
			}
		}


		//������� ������ ����� �� �������
		$ftp_fsize = ftp_size($conn_id,$fileName);

		if ($ftp_fsize >= 0) {
	
			//������� ����� ���������� (�������������) �����
			$local_fsize = filesize($tmp);

			if ($ftp_fsize < $local_fsize) {
				$err = 'Error: load partly, not fullsize file '. $fileName .' to server '.$host. '. May be server restriction.';
				ftp_close($conn_id);
				return $err;
			} else {
				$err = 'Unknown error loading file '. $fileName .' to server '.$host;
				ftp_close($conn_id);
				return $err;
			}

		} else {
			$err = 'Error: can not load file '. $fileName .' to server '.$host;
			ftp_close($conn_id);
			return $err;
		}


		ftp_close($conn_id);

	}

	return true;

}



?>