<?php
/*
 * Template Name: Version 1
 */
get_header();
  while ( have_posts() ) : the_post();
?>
<?php get_template_part( 'partials/block', 'header' ); ?>
<?php get_template_part( 'partials/block', 'content' ); ?>
<?php get_template_part( 'partials/block', 'footer' ); ?>
<?php
  endwhile;
get_footer();