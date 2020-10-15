<?php

//default links
define('ROOT', get_template_directory_uri());
define('IMG', ROOT . '/img');

//Change jquery version
function replace_core_jquery_version() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', "https://code.jquery.com/jquery-3.1.1.min.js", array(), '3.1.1' );
}
add_action( 'wp_enqueue_scripts', 'replace_core_jquery_version' );

//Add wp menu
add_theme_support( 'menus' );