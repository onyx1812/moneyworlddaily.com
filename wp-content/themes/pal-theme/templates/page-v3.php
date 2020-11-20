<?php
/*
 * Template Name: Version 3
 */
get_header();
  while ( have_posts() ) : the_post();
?>
<?php get_template_part( 'partials/v2/block', 'header' ); ?>
<?php get_template_part( 'partials/v3/block', 'content' ); ?>
<?php get_template_part( 'partials/v3/block', 'footer' ); ?>
<?php get_template_part( 'partials/v3/block', 'popup' ); ?>
<?php
  endwhile;
get_footer();