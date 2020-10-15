<section class="content content--page">
	<div class="container">
		<?php the_field('content', false, false); ?>
	</div>
</section>

<?php
	$data = '';
	if(have_rows('param')):
		while (have_rows('param')):
			the_row();
			if( get_row_index() === 1){
				$data .= get_sub_field('key') .'='. get_sub_field('value');
			} else {
				$data .= '&'.get_sub_field('key') .'='. get_sub_field('value');
			}
		endwhile;
	endif;
?>

<script>
	let link = '<?php the_field('link'); ?>',
		url = window.location.href,
		queryStart = url.indexOf("?") + 1,
		queryEnd = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		dynData = '<?php echo $data; ?>',
		newLink = link+'?';

	if( dynData !== '' ) {
		newLink += dynData;
		if( (query !== url || query !== '') && query.length > 0) {
			if( queryStart !== 0 && (queryEnd - queryStart) > 1){
				newLink += '&';
				newLink += query;
			}
		}
	} else {
		if( (query !== url || query !== '') && query.length > 0) {
			if( queryStart !== 0 && (queryEnd - queryStart) > 1){
				newLink += query;
			}
		}
	}

	let textLinks = document.querySelectorAll('.content a[href]');
	for (var i = 0; i < textLinks.length; i++) {
		textLinks[i].href = newLink;
	}
</script>
<?php if( isset($_GET['oid']) ): ?>
	<?php
		if( $_GET['oid'] == 5 ) $eid = 45;
		if( $_GET['oid'] == 6 ) $eid = 44;
		if( $_GET['oid'] == 10 ) $eid = 46;
		if( $_GET['oid'] == 14 ) $eid = 59;
	?>
	<script src="https://www.bls29trk.com/scripts/sdk/everflow.js"></script>
	<script>
		EF.click({
			offer_id: EF.urlParameter('oid'),
			affiliate_id: EF.urlParameter('affid'),
			sub1: EF.urlParameter('sub1'),
			sub2: EF.urlParameter('sub2'),
			sub3: EF.urlParameter('sub3'),
			sub4: EF.urlParameter('sub4'),
			sub5: EF.urlParameter('sub5'),
		});
		document.addEventListener("DOMContentLoaded", function(){
			setTimeout(function(){
				EF.conversion({
					offer_id: EF.urlParameter('oid'),
					event_id: <?php echo $eid; ?>,
				});
			}, 2000);
		});
	</script>
<?php endif; ?>
</script>