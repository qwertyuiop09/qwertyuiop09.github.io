<?php
function upload($remote_file, $local_file, $ftp_con)
{
   $contents = ftp_nlist($ftp_con, ".");
   
   if (in_array($remote_file, $contents))
   {
      //������� ������ ������� ����� �� �������
      $ftp_fsize = ftp_size($ftp_con,$remote_file);
      //������� ����� ���������� (�������������) �����
      $local_fsize = filesize($local_file);
      //���� 2 �������
      sleep(2);
      //����� ��� ��� ������ ����� �� �������
      $ftp_fsize2 = ftp_size($ftp_con,$remote_file);
   }
   else
   {
      $ftp_fsize = $ftp_fsize2 = -1;
      $local_fsize = filesize($local_file);
   }
   
    //���� ������ ����������
    if (($ftp_fsize2>$ftp_fsize))
    {
        //���� ������� ������ ��������� �� ������ � �� �������
        if ($local_fsize==$ftp_fsize2)
        {
            return true;
        }
        else
        {
            return '�����������. '.(round(($ftp_fsize2/$local_fsize),2)*100)."% ��� ���������.\n";
        }
    }
    else
    {
        //���� ������� ������ ��������� �� ������ � �� �������
        if ($local_fsize==$ftp_fsize2)
        {
            return "��� ���� �� �������.\n";
        }
        //���� ������ ����� �� ����������
        //���� ���� ����������(�� ���� ������ ��� ��������� ������� �����)
        elseif (($ftp_fsize!=-1)&&($ftp_fsize2!=-1))
        {
            //�������� ������� � ������� �������
           if (ftp_put($ftp_con,$remote_file,$local_file,FTP_BINARY,$ftp_fsize))
               return "����������� ".round(($local_fsize-$ftp_fsize)/1024)." kb.\n";
           else
               return false;
        }
        else
        {
            //����� �������� ������ ������� (���� �� - ������ ������ ���� ��� ������ ��� ������� ������� � �����������)
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
                     echo $file." �������� �� ������\n";
                  else
                     echo $file." ".$txt;
           }
           else
           {
          echo "�� ������� ��������� $file �� ������\n";
           }
     }
     else
     {
            $contents = ftp_nlist($ftp_con, ".");
            if (in_array($file, $contents))
            {
               ftp_chdir($ftp_con, $file);
               echo "����� ".$file." ��� ���������� � ��������. ������.\n";
            }
            else
            {
               ftp_mkdir($ftp_con, $file);
               ftp_chdir($ftp_con, $file);
               echo "������� ����� ".$file.".\n";
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
 
��� ���������� PHP-������ ��� ������ � ���.
�������������:
<?php echo $argv[0]; ?> <local_file_name> [<remote_file_name>, [<ftp_addr>]]
 
<local_file_name> ���� ������� ���������� ��������� �� ftp-������
<remote_file_name> ���� �� ��� �������, ���� �� ������, ������� ��� ���������� �����(� ������)
<ftp_addr> ����� ��� �������. �� ��������� ������������ ���������.
 
�����  --help, -help, -h,
��� -? ������� ������� ���������� ����������.
         
<?php
    }
    else
    {
      set_time_limit(0);
      echo "������ � ��� ����� �������\n";
     
      if (!isset($argv[3]))
         $ftp = "127.0.0.1";
      else
         $ftp = $argv[3];
     
      //-----------------����� �������
      $user = "anonymous";
      $pass = "";
      //-------------------------------
      $open = ftp_connect($ftp);
     
      if (!ftp_login($open, $user, $pass))
         die("�� ���� �����������.\n");
      else
         echo "���������� ".$user."@".$ftp."\n";
 
      ftp_pasv($open, true);        //��������� � ��������� �����
 
      $contents = ftp_nlist($open, ".");
 
      $file = $argv[1];
     
      if (!isset($argv[2]))
         $remote_file = $argv[1];
      else
         $remote_file = $argv[2];
 
        //�� ��� ����������� � ��� �� �������
      if (!in_array($remote_file,$contents)&&(!is_dir($file)))
      {
         if ($txt = upload($remote_file, $file, $open))
         {
            if (is_bool($txt))
               echo $file." �������� �� ������\n";
            else
               echo $file.$txt;
         }
         else
         {
            echo "�� ������� ��������� $file �� ������\n";
         }
      }
      // �� ��� �����������, �� ��� �������
      elseif(!in_array($remote_file,$contents)&&(is_dir($file)))      
      {
            ftp_mkdir($open, $remote_file);
            ftp_chdir($open, $remote_file);
            echo "������� ����� ".$remote_file."\n";
            send_dir($file,$open);
      }
      //�� ��� ������������ � ��� �� �������
      elseif(in_array($remote_file,$contents)&&(!is_dir($file)))
      {
         if ($txt = upload($remote_file, $file, $open))
         {
            if (is_bool($txt))
               echo $remote_file." �������� �� ������\n";
            else
               echo $remote_file.$txt;
         }
         else
         {
            echo "�� ������� ��������� $remote_file �� ������\n";
         }
      }
      //�� ��� ������������ � ��� �������
      elseif(in_array($remote_file,$contents)&&(is_dir($file)))  
      {
         ftp_chdir($open, $remote_file);
         echo "������� ".$remote_file." ��� ������. ������.\n";
         send_dir($file,$open);
      }
     //����������� �� ���
      ftp_close($open);
   }
?>