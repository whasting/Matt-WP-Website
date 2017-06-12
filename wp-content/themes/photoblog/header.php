<!DOCTYPE html>
<html>
  <head id="head">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans|Pacifico" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="http://res.cloudinary.com/whasting/image/upload/c_scale,h_25/v1496185207/c7814ec0d94d22d826bbac42e5626361_tqnmzb.jpg"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <meta charset="utf-8">
    <title>Matt</title>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-64043937-5', 'auto');
      ga('send', 'pageview');

    </script>
    <?php wp_head();?>
  </head>
  <body id="main">
    <nav id="nav">
      <a href="http://localhost">
        <img
          class="logo"
          src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_75/v1496185207/c7814ec0d94d22d826bbac42e5626361_tqnmzb.jpg"
          alt="">
      </a>
      <ul class="nav-items">
        <?php wp_list_pages( '&title_li=' ); ?>
        <!-- <li class="nav-item">Adventures</li>
        <li class="nav-item">Matt</li>
        <li class="nav-item">Contact</li> -->
        <!-- <button class="donate-button" type="button" name="button">Donate</button> -->
      </ul>
      <li class="hamburger">
        <img src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_50/v1496187109/menu-button-of-three-horizontal-lines_ka7bqa.png" alt="">
      </li>
      <div class="menu">
        <?php wp_list_pages( '&title_li=' ); ?>
        <!-- <a class="menu-item one" href="#">Adventures</a>
        <a class="menu-item two" href="#">Matt</a>
        <a class="menu-item one " href="#">Contact</a> -->
      </div>
    </nav>
