<center>
<?php if( get_the_ID() == 1875 ): ?>
<a href="https://www.bls29trk.com/69PDQW/3MZNPR/" class="btn"
<?php elseif( in_array(get_the_ID(), array(1910, 1972, 1974, 1908, 1592, 1140, 1609)) ): ?>
<a href="https://sakmtracker.com/click" class="btn"
<?php else: ?>
<a href="https://savingsscanner.org/click" class="btn"
<?php endif; ?>
  style="
    background-color: <?php echo get_sub_field('bg'); ?>;
    font-size: <?php echo get_sub_field('text_size'); ?>px;
    color: <?php echo get_sub_field('text_color'); ?>;
    border-radius: <?php echo get_sub_field('brd_radius'); ?>px;
    font-weight: <?php echo get_sub_field('text_weight'); ?>;
    display: inline-block;
    padding: 15px;
    text-decoration: none;
  "><?php echo get_sub_field('text'); ?></a>
</center>