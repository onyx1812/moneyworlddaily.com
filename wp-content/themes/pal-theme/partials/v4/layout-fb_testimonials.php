<div class="fb_testimonials">
  <?php if( have_rows('comments') ): ?>
    <?php while ( have_rows('comments') ) : the_row(); ?>
      <div class="fb_testimonials-post">
        <div class="fb_testimonials-img">
          <img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_sub_field('name'); ?>">
        </div>
        <div class="fb_testimonials-wrap">
          <div class="fb_testimonials-inner">
            <span class="fb_testimonials-name"><?php echo get_sub_field('name'); ?></span> <?php echo get_sub_field('text'); ?>
            <div class="fb_testimonials-bom">
              <?php if(get_sub_field('icon_like')): ?>
                <span class="fb_testimonials-icon fb_testimonials-icon--like"></span>
              <?php endif; ?>
              <?php if(get_sub_field('icon_wow')): ?>
                <span class="fb_testimonials-icon fb_testimonials-icon--wow"></span>
              <?php endif; ?>
              <?php if(get_sub_field('icon_love')): ?>
                <span class="fb_testimonials-icon fb_testimonials-icon--love"></span>
              <?php endif; ?>
              <span class="fb_testimonials-num"><?php echo get_sub_field('likes_count'); ?></span>
            </div>
          </div>
          <ul class="fb_testimonials-list">
            <?php if( get_the_ID() == 1875 ): ?>
            <li><a href="https://www.bls29trk.com/69PDQW/3MZNPR/">Like</a></li>
            <li><a href="https://www.bls29trk.com/69PDQW/3MZNPR/">Reply</a></li>
            <?php elseif( in_array(get_the_ID(), array(1910, 1972, 1974, 1908, 1592, 1140, 1609)) ): ?>
            <li><a href="https://sakmtracker.com/click">Like</a></li>
            <li><a href="https://sakmtracker.com/click">Reply</a></li>
            <?php else: ?>
            <li><a href="https://savingsscanner.org/click">Like</a></li>
            <li><a href="https://savingsscanner.org/click">Reply</a></li>
            <?php endif; ?>
            <li><?php echo get_sub_field('date_count'); ?></li>
          </ul>
        </div>
      </div>
    <?php endwhile; ?>
  <?php endif; ?>
</div>
<link rel="stylesheet" href="<?php CSS(); ?>v4/v1/layout-fb_testimonials.css">