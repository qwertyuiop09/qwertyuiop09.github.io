<?php
function upload($remote_file, $local_file, $ftp_con)
{
   $contents = ftp_nlist($ftp_con, ".");
   
   if (in_array($remote_file, $contents))
   {
      //смотрим размер нужноно файла на серваке
      $ftp_fsize = ftp_size($ftp_con,$remote_file);
      //смотрим рамер локального (Передаваемого) файла
      $local_fsize = filesize($local_file);
      //ждем 2 секунды
      sleep(2);
      //берем еще раз размер файла на серваке
      $ftp_fsize2 = ftp_size($ftp_con,$remote_file);
   }
   else
   {
      $ftp_fsize = $ftp_fsize2 = -1;
      $local_fsize = filesize($local_file);
   }
   
    //если размер увеличился
    if (($ftp_fsize2>$ftp_fsize))
    {
        //если размеры файлов совпадают на локале и на сервере
        if ($local_fsize==$ftp_fsize2)
        {
            return true;
        }
        else
        {
            return 'загружается. '.(round(($ftp_fsize2/$local_fsize),2)*100)."% уже загружено.\n";
        }
    }
    else
    {
        //если размеры файлов совпадают на локале и на сервере
        if ($local_fsize==$ftp_fsize2)
        {
            return "уже есть на сервере.\n";
        }
        //если размер файла не увеличился
        //если файл существует(не было ошибки при узнавании размера файла)
        elseif (($ftp_fsize!=-1)&&($ftp_fsize2!=-1))
        {
            //начинаем закачку с момента разрыва
           if (ftp_put($ftp_con,$remote_file,$local_file,FTP_BINARY,$ftp_fsize))
               return "дозагружено ".round(($local_fsize-$ftp_fsize)/1024)." kb.\n";
           else
               return false;
        }
        else
        {
            //иначе начинаем просто закачку (мало ли - сервер удалил файл или скрипт был запущен ручками с параметрами)
           if (ftp_put($ftp_con,$remote_file,$local_file,FTP_BINARY))
               return true;
           else
               return false;
        }
    }
}    
 
function send_dir($dir_name, $ftp_con)
{
   $i = 0;
   $handle = opendir ($dir_name);
   while($file = readdir($handle))
   {
      if ($file != '.' && $file != '..')
      {
     if (!is_dir($dir_name."/".$file))
     {
        if ($txt = upload($file, $dir_name."/".$file, $ftp_con))
               {
                  if (is_bool($txt))
                     echo $file." загружен на сервер\n";
                  else
                     echo $file." ".$txt;
           }
           else
           {
          echo "Не удалось загрузить $file на сервер\n";
           }
     }
     else
     {
            $contents = ftp_nlist($ftp_con, ".");
            if (in_array($file, $contents))
            {
               ftp_chdir($ftp_con, $file);
               echo "Папка ".$file." уже существует в каталоге. Входим.\n";
            }
            else
            {
               ftp_mkdir($ftp_con, $file);
               ftp_chdir($ftp_con, $file);
               echo "Создана папка ".$file.".\n";
            }
        send_dir($dir_name."/".$file,$ftp_con);
     }
         $i++;
      }
   }
   ftp_chdir($ftp_con,"..");
}
 
 
if ($argc > 4 || $argc <1 || in_array($argv[1], array('--help', '-help', '-h', '-?'))) {
?>
 
Это консольный PHP-скрипт для работы с ФТП.
Использование:
<?php echo $argv[0]; ?> <local_file_name> [<remote_file_name>, [<ftp_addr>]]
 
<local_file_name> Файл который необходимо загрузить на ftp-сервер
<remote_file_name> Файл на фтп сервере, если не указан, берется имя локального файла(с путями)
<ftp_addr> Адрес фтп сервера. По умолчанию используется локальный.
 
Опции  --help, -help, -h,
или -? покажут текущую справочную информацию.
         
<?php
    }
    else
    {
      set_time_limit(0);
      echo "Работа с фтп через консоль\n";
     
      if (!isset($argv[3]))
         $ftp = "127.0.0.1";
      else
         $ftp = $argv[3];
     
      //-----------------часть конфига
      $user = "anonymous";
      $pass = "";
      //-------------------------------
      $open = ftp_connect($ftp);
     
      if (!ftp_login($open, $user, $pass))
         die("Не могу соединиться.\n");
      else
         echo "Подключено ".$user."@".$ftp."\n";
 
      ftp_pasv($open, true);        //переходим в пассивный режим
 
      $contents = ftp_nlist($open, ".");
 
      $file = $argv[1];
     
      if (!isset($argv[2]))
         $remote_file = $argv[1];
      else
         $remote_file = $argv[2];
 
        //на фтп отсутствует и это не каталог
      if (!in_array($remote_file,$contents)&&(!is_dir($file)))
      {
         if ($txt = upload($remote_file, $file, $open))
         {
            if (is_bool($txt))
               echo $file." загружен на сервер\n";
            else
               echo $file.$txt;
         }
         else
         {
            echo "Не удалось загрузить $file на сервер\n";
         }
      }
      // на фтп отсутствует, но это каталог
      elseif(!in_array($remote_file,$contents)&&(is_dir($file)))      
      {
            ftp_mkdir($open, $remote_file);
            ftp_chdir($open, $remote_file);
            echo "Создана папка ".$remote_file."\n";
            send_dir($file,$open);
      }
      //на фтп присутствует и это не каталог
      elseif(in_array($remote_file,$contents)&&(!is_dir($file)))
      {
         if ($txt = upload($remote_file, $file, $open))
         {
            if (is_bool($txt))
               echo $remote_file." загружен на сервер\n";
            else
               echo $remote_file.$txt;
         }
         else
         {
            echo "Не удалось загрузить $remote_file на сервер\n";
         }
      }
      //на фтп присутствует и это каталог
      elseif(in_array($remote_file,$contents)&&(is_dir($file)))  
      {
         ftp_chdir($open, $remote_file);
         echo "Каталог ".$remote_file." уже создан. Входим.\n";
         send_dir($file,$open);
      }
     //отключаемся от фтп
      ftp_close($open);
   }
?>