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
  } else if( is_page_template( 'templates/page-v3.php' ) ) {
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-v3.css', false, null);
    wp_enqueue_script( 'scripts', ROOT . '/js/scripts-v3.js', false, null, 'in_footer');
  } else if( is_page_template( 'templates/page-v4.php' ) ) {
    wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-v4.css', false, null);
    wp_enqueue_script( 'scripts', ROOT . '/js/scripts-v4.js', false, null, 'in_footer');
  }
}
add_action( 'wp_enqueue_scripts', 'front_scripts' );


function CSS(){
  echo ROOT . '/css';
}


// Send email with AJAX req
function ajax_form(){
    $first_name = $_REQUEST['first-name'];
    $last_name = $_REQUEST['last-name'];
    $email = $_REQUEST['email-input'];
    $message = $_REQUEST['textarea-input'];
    $thm  = 'New contact';
    $msg = "First Name: ".$first_name."<br/>
        Last Name: ".$last_name ."<br/>
        Email: ".$email ."<br/>
        Message: ".$message ."<br/>";
    $mail_to = 'cs@moneyworlddaily.com';
    $headers = array('Content-Type: text/html; charset=UTF-8');


// sending an email

    if(wp_mail($mail_to, $thm, $msg, $headers)){
        $response = 'Message sent';
    } else {
        $response = 'Message did not send';
    };

    if(defined('DOING_AJAX') && DOING_AJAX ){
        echo $response;
        wp_die();
    }
}

add_action('wp_ajax_nopriv_ajax_order', 'ajax_form' );
add_action('wp_ajax_ajax_order', 'ajax_form' );