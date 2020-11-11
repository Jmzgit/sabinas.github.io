<?php
    $currentDirectory = getcwd();
    $uploadDirectory = "/uploads/";

    $errors = []; // Store errors here

    $fileExtensionsAllowed = ['jpeg','jpg','png', 'ogg', 'pdf','html', 'php', 'csv','txt','xls','xlsx','ipynb','mp3', 'py']; // These will be the only file extensions allowed

    $fileName = $_FILES['the_file']['name'];
    $fileSize = $_FILES['the_file']['size'];
    $fileTmpName  = $_FILES['the_file']['tmp_name'];
    $fileType = $_FILES['the_file']['type'];

    $tmp = explode(".", $fileName);
    $fileExtension = strtolower(end($tmp)); //Le pasamos la variable, no la función.


    $uploadPath = $currentDirectory . $uploadDirectory . basename($fileName);

    if (isset($_POST['submit'])) {

      if (! in_array($fileExtension,$fileExtensionsAllowed)) {
        $errors[] = "This file extension is not allowed.";
      }

      if ($fileSize > 6000000) {
        $errors[] = "File exceeds maximum size (6MB)";
      }

      if (empty($errors)) {
        $didUpload = move_uploaded_file($fileTmpName, $uploadPath);

        if ($didUpload) {


          echo "<p align='center'> Nice, file <mark>$fileName</mark> has been uploaded. </p>";


        } else {
   
          
           echo "<p align='center'> An error occurred. Please contact the administrator. </p>";
        }
      } else {
        foreach ($errors as $error) {
          echo $error . "These are the errors" . "\n";
          
        }
      }

    }
?>


