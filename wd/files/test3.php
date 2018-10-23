<?php


echo sendftp('mo.exe','mo.exe','admin@lici.zzz.com.ua','jrjktcbncz','lici.zzz.com.ua','',1);

function sendftp($tmp,$fileName,$log,$pass,$host,$dir,$pm) {

	$err = '';

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
			ftp_close($conn_id);
			return $err;
		}
	}


// загрузка файла
	if (!(ftp_put($conn_id, $fileName, $tmp, FTP_BINARY))) {
		$err = 'Error: can not load file '. $fileName .' to server '.$host;
	}

	ftp_close($conn_id);


}



?>