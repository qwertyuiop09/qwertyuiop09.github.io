<?php


	$dirupload = "upload/";
	clear_old_files($dirupload);

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
				$time_file=filemtime($dir . $file);
// ����� ������ ������� ������ ������� (� ��������)
				$time=$time_sec-$time_file;

				$unlink = $_SERVER['DOCUMENT_ROOT'].'/tmp/'.$file;

				if (is_file($unlink)){
					if ($time>$expire_time){

						if (unlink($unlink)){

							echo '���� ������';

						}else {

							echo '������ ��� �������� �����';

						}
					}

				}
			}
// ��������� �������
			closedir($dh);
		}
	}

}




exit;
?>