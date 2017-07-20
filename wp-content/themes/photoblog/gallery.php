<?php
  /**
   * Template Name: Gallery
   */
  // get_header();
?>

<div id="main-content" class="main-content">

  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">

      <h1>Hey There</h1>

      <?php
        // TO SHOW THE PAGE CONTENTS
        while ( have_posts() ) : the_post(); ?> <!--Because the_content() works only inside a WP Loop -->
            <div class="entry-content-page">
                <?php the_content(); ?> <!-- Page Content -->
            </div><!-- .entry-content-page -->

      <?php
        endwhile; //resetting the page loop
        wp_reset_query(); //resetting the page query
      ?>

      <?php
   // TO SHOW THE POST CONTENTS
   ?>
       <?php
       $my_query = new WP_Query( 'cat=1' ); // I used a category id 1 as an example
       ?>
       <?php if ( $my_query->have_posts() ) : ?>
       <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
       <?php while ($my_query->have_posts()) : $my_query->the_post(); ?>

           <h1 class="entry-title"><?php the_title(); ?></h1> <!-- Queried Post Title -->
           <div class="entry-content">
               <?php the_excerpt(); ?> <!-- Queried Post Excerpts -->
           </div><!-- .entry-content -->

       <?php endwhile; //resetting the post loop ?>

       </div><!-- #post-<?php the_ID(); ?> -->

       <?php
       wp_reset_postdata(); //resetting the post query
       endif;
       ?>
    </div><!-- #content -->
  </div><!-- #primary -->
</div><!-- #main-content -->


<?php
  // get_footer();
?>
