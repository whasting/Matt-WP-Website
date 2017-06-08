<?php
/**
 * @package Posts_in_Page
 * @author Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2017, IvyCat, Inc.
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */
?>

<!-- NOTE: If you need to make changes to this file, copy it to your current theme's main
	directory so your changes won't be overwritten when the plugin is upgraded. -->

<!-- Post Wrap Start-->
<div class="hero-img">
</div>

<div class="gallery-wrapper">

	<!-- 	This outputs the post TITLE -->
	<h1 class="gallery-header"><?php the_title(); ?></h1>
	<span class="line">

	</span>

	<!-- 	This outputs the post EXCERPT.  To display full content including images and html,
		replace the_excerpt(); with the_content();  below. -->
	<div class="gallery">
		<?php the_content(); ?>
	</div>

	<?php
		$url = get_the_post_thumbnail_url( null, 'post-thumbnail' );
		// echo "<script>console.log($url);</script>";
		echo "<style>.hero-img { background-image: url('$url') }</style>";
	?>

</div>
<!-- // Post Wrap End -->
