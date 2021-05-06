<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<div class="row" class="homepage ">
  <div class="column">
    <a href= "menu.html"><img src="img/homeTacos.png" style="width:100%"></a>
    <a href="http://instagram.com/kodas_creamery" target="_blank"><img src="img/homeIG.png" style="width:100%"></a>


  </div>
  <div class="column" class="innerSpace">
    <a href= "products.html"><img src="img/homeProducts.png" style="width:100%">
    <a href= "http://facebook.com/heladosdelicias1961" target="_blank"><img src="img/homeFB.png" style="width:100%"></a>

  </div>
  <div class="column">
    <a href="tel:6461234567"><img src="img/homePhone.png" style="width:100%"></a>
    <a href= "gallery.html"><img src="img/homePhotos.png" style="width:100%">
  </div>
  <div class="column">
    <a href="mailto:hola@deliciashelados.com" target="_blank"><img src="img/homeMail.png" style="width:100%"></a>
    <a href="https://www.google.com/maps/place/Helados+Delicias+Centro/@31.8730907,-116.6269217,17z/data=!3m1!4b1!4m5!3m4!1s0x80d893a471041d69:0xc0342a7ad414ea5e!8m2!3d31.8730592!4d-116.6246499" target="_blank"><img src="img/homeLoc.png" style="width:100%"></a>
  </div>
  </div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
