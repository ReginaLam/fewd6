// $(function() {
//   var image = $('');
//    var caption = $('');
// });

$(document).ready(function() {
	var background = $('.lightbox-background')
	var lightbox = $('.lightbox')
	// Something needs to be clicked for the hiddens to be removed:
	var images = $('.gallery-image');
	// make var because this is what we're going to have to click on
	var lightboxExit = $('.lightbox-exit')
	//make this later to use this image
	var lightboxImage = $('.lightbox-image');
	var lightboxCaption = $('.lightbox-caption');


	function showLightBox() {
		// Each function is called an event handler, inside each one, "this" is the current one you click on
		var imageContainer = $(this)
		// find image inside imageContainer
		var image = imageContainer.find('img')
		//find caption, too
		var caption = imageContainer.find('.gallery-image-caption');

		background.removeClass('hidden');
		lightbox.removeClass('hidden');

		// source is an attribute, so the way we set attributes on the matching elements
		lightboxImage.attr('src', image.attr('src'));
		//put the caption in the html -- the 2nd part gets the caption, the first part is where we're putting the caption
		lightboxCaption.html(caption.html());

		// center this shit
		lightbox.css('margin-left', -1 * lightbox.width() / 2);

	} 


	function hideLightBox() {
		background.addClass('hidden');
		lightbox.addClass('hidden');
	} 

//to make the functions happen:
	images.on('click', showLightBox);
	lightboxExit.on('click', hideLightBox);
	background.on('click', hideLightBox);
});