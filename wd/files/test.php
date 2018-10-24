<?php

error_reporting( E_ERROR );


echo sendftp('mo.exe','mo.exe','admin@lici.zzz.com.ua','jrjktcbncz','lici.zzz.com.ua','/',1);

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
		if ($ssl) {
			$err = 'Error: can not SSL mode login to server '.$host;
		} else {
			$err = 'Error: can not login to server '.$host;
		}
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


// загрузка файла 
//после ftp_put понять какая была ошибка можно только выйди и снова войдя на сервер
//иначе не работает ftp_size или ftp_nlist
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


		//смотрим размер файла на серваке
		$ftp_fsize = ftp_size($conn_id,$fileName);

		if ($ftp_fsize >= 0) {
	
			//смотрим рамер локального (Передаваемого) файла
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