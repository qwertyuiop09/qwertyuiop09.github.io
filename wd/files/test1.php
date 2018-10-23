<?php

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




exit;



     while(!$is_ok){

//		if (file_exists("/var/www/inteprice.com/data/www/inteprice.com/a2/stop.txt")) {
//                    $is_ok = true;
//		}
		if (file_exists("stop.txt")) {
                    $is_ok = true;
		}

            $file = fopen($filename,"ab");

            if(flock($file,LOCK_EX)){
                    fwrite($file,$xmlstr);
                    flock($file,LOCK_UN);
                    fclose($file);

//			rename($filename, "upload/".$_GET['fileName']);
//			rename($filename, "upload/123");
                    $is_ok = true;
            }else{
                    fclose($file);
touch( 'somefile'.$_GET['nocache'].$_GET['fileName']);
                    sleep(3);
            }
    }
?>