<?php
/**
 *
 * Template Name: QR Scanner
 *
 */
?>
<?php

get_header();

include get_template_directory() . '/inc/phpqrcode/qrlib.php';
include get_template_directory() . '/inc/custom.php';

?><img src="data:image/png;base64,<?php echo $imageString ?>" width="200px" /> <?

while ( have_posts() ) {
	the_post();
	global $post;
	$sidebar_id = 'shapely-' . $post->post_name;

	if ( ! function_exists( 'dynamic_sidebar' ) || ! dynamic_sidebar( $sidebar_id ) ) {
		echo '<div class="container p24 wp-caption-text">';
			echo '<h5>' . sprintf( esc_html__( 'This is the %s sidebar, add some widgets to it to change it.', 'shapely' ), get_the_title() ) . '</h5>';
		echo '</div>';
	}
}

get_footer();

