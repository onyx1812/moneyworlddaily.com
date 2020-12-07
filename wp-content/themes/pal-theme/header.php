<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="keywords" content="<?php bloginfo('keywords'); ?>"/>
    <meta name="description" content="<?php bloginfo('description'); ?>"/>
    <meta name="copyright" content="<?php bloginfo('copyright'); ?>">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0">
    <meta name="author" content="MaxGloba">
    <meta name="theme-color" content="#fff">
    <meta name="format-detection" content="telephone=no">

    <?php if( is_page_template( 'templates/page-v1.php' ) ): ?>
      <link rel="shortcut icon" type="image/x-icon" href="<?php echo IMG; ?>/favicon.ico" />
      <title><?php echo get_bloginfo('name'); ?></title>
      <style>.dtpcnt{opacity: 0;}</style> <script> (function(b,c,f,l,m,e,n,r,d,g,p,a,h,k){function q(){for(var a=c.querySelectorAll(".dtpcnt"),b=0,d=a.length;b<d;b++)a[b][n]=a[b][n].replace(/(^|\s+)dtpcnt($|\s+)/g,"")}b[d]||(b[d]=function(){(b[d].q=b[d].q||[]).push(arguments)},k=c[l],c[l]=function(){k&&k.apply(this,arguments);if(b[d]&&!b[d].hasOwnProperty("params")&&/loaded|interactive|complete/.test(c.readyState))for(;a=c[m][g++];)/\/?click($|(\/[0-9]+)?$)/.test(a.pathname)&&(a[e]="javascrip"+b.postMessage.toString().slice(4,5)+":"+d+'.l="'+a[e]+ '",void 0')},setTimeout(function(){a=c.createElement("script");h=c.scripts[0];a.defer=1;a.src=p+(-1===p.indexOf("?")?"?":"&")+"lpref="+f(c.referrer)+"&lpurl="+f(location[e])+"&lpt="+f(c.title)+"&t="+(new Date).getTime();a[r]=function(){for(g=0;a=c[m][g++];)/dtpCallback\.l/.test(a[e])&&(a[e]=a[e].match(/dtpCallback\.l="([^"]+)/)[1]);q()};h.parentNode.insertBefore(a,h)},0),setTimeout(q,7E3))})(window,document,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback", 0,"https://savingsscanner.org/d/.js"); </script> <noscript><link href="https://savingsscanner.org/d/.js?noscript=true" rel="stylesheet"/></noscript>
    <?php elseif( is_page_template( 'templates/page-v2.php' ) || is_page_template( 'templates/page-v3.php' )): ?>
      <link rel="shortcut icon" type="image/png" href="<?php echo IMG; ?>/favicon-v2.png?v=1.00" />
      <title>MoneyWorldDaily - News & Insights</title>
      <!-- begin Convert Experiences code--> <script data-cfasync="false" type="text/javascript" src="https://cdn-3.convertexperiments.com/js/10034551-10032810.js"></script> <!-- end Convert Experiences code -->
      <script data-obct type="text/javascript">!function(_window, _document) {var OB_ADV_ID='00357096e9646e2eecfc75fec8cee0f6fa'; if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;} var api = window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document); obApi('track', 'PAGE_VIEW'); </script>
      <script type='text/javascript'> window._tfa = window._tfa || []; window._tfa.push({notify: 'event', name: 'page_view', id: 1341604}); !function (t, f, a, x) {if (!document.getElementById(x)) {t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f); } }(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/unip/1341604/tfa.js', 'tb_tfa_script'); </script>
      <noscript><img src='https://trc.taboola.com/1341604/log/3/unip?en=page_view' width='0' height='0' style='display:none' /></noscript>
    <?php else: ?>
      <link rel="shortcut icon" type="image/x-icon" href="<?php echo IMG; ?>/favicon.ico" />
      <title><?php echo get_bloginfo('name'); ?></title>
    <?php endif; ?>

    <script>
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    </script>
    <?php wp_head(); ?>

    <?php
      if( get_field('header_scripts') ):
        the_field('header_scripts');
      endif;
    ?>
    <?php if( get_field('fonts') ): ?>
      <?php if( get_field('fonts') === 'BrandonText' ): ?>
        <link rel="stylesheet" href="https://betterlyfetech.com/fonts/BrandonText/brandon-text.min.css">
        <style>html,body{font-family:'BrandonText'}</style>
      <?php elseif( get_field('fonts') === 'Lato' ): ?>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
        <style>body{font-family: 'Lato', sans-serif;}</style>
      <?php elseif( get_field('fonts') === 'Montserrat' ): ?>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
        <style>body{ font-family: 'Montserrat', sans-serif; }</style>
      <?php endif; ?>
    <?php endif; ?>
  </head>
  <body <?php body_class(); ?> >