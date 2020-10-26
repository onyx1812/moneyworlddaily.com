<section class="content content--page">
  <div class="container">
    <?php the_field('content', false, false); ?>
  </div>
</section>
<script>
const queryString = window.location.search,
  track = `https://savingsscanner.org/click${queryString}`,
  links = document.querySelectorAll('.content a[href]');
links.forEach(link => {
  link.href = 'https://savingsscanner.org/click';
  link.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = track;
  });
});
</script>