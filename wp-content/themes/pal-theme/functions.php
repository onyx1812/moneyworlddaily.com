<?php

// Includes
include('include/settings.php');
include('include/clear.php');

// Scripts
function front_scripts() {
  if( is_front_page() ){
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-index.css');
  } else if( is_404() ){
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-404.css');
  } else if( is_page_template( 'templates/page-v1.php' ) ){
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-v1.css');
    wp_enqueue_script( 'scripts', ROOT . '/js/scripts-v1.js', false, false, 'in_footer');
  } else if( is_page_template( 'templates/page-v2.php' ) ) {
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-v2.css');
    wp_enqueue_script( 'scripts', ROOT . '/js/scripts-v2.js', false, false, 'in_footer');
  }
}
add_action( 'wp_enqueue_scripts', 'front_scripts' );