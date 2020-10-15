<?php
/*
 * Template Name: Version 2
 */
get_header();
  while ( have_posts() ) : the_post();
?>
<?php get_template_part( 'partials/v2/block', 'header' ); ?>
<?php get_template_part( 'partials/block', 'content' ); ?>
<?php get_template_part( 'partials/v2/block', 'footer' ); ?>
<?php
  endwhile;
get_footer();