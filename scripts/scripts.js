$(function() {
	var $previewFull = $('img.preview-full');
	var $thumb = $('.previews a')

	var movieTitle = $thumb.attr('data-title');
	var movieDirector = $thumb.attr('data-director');
	var movieDP = $thumb.attr('data-dp');
	// var imageHeight = []

	//auto-set height of preview image
	height = Number($thumb.attr("data-height"));
	$("#full-img").height(height+8);

	// dynamically set heights of other images on pageload
	// var heightEternal = height*1.3+8;
	// var heightTree = height*1.238+8;
	// var heightJackie = height*1.257+8;
	// var heightStarWars = height*.987+8;

	$thumb.find('img').hover(
		function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
	$thumb.on('click',function(e){
		e.preventDefault();
		var src = $(this).attr("data-full");
		var movieTitle = $(this).attr("data-title");
		var movieDirector = $(this).attr("data-director");
		var movieDp = $(this).attr("data-dp");
		var height = Number($(this).attr("data-height"));
		$("#full-img").height(height+8);
		//load image after fadeOut
		$previewFull.fadeOut(400, function(){
			$previewFull.attr('src',src);
		});
		//fadeIn after image loads
		$previewFull.fadeIn();
		//set the link target for fancybox
		$('a.fancybox').attr('href',src);
		//remove selected class and add to the correct img
		$('img').removeClass('selected');
		$(this).find('img').addClass('selected');
		//update fancybox title info to be that of selected image
		$(".fancybox").fancybox({
			title: '<h2>' + movieTitle + '</h2>' + '<p class="director">Director: ' + movieDirector + '</p><p class="dp">Director of Photography: ' + movieDP + '</p>',
			helpers : {
	        	title: {
	            	type: 'inside'
	        	}
	    	}
	    });
	});

	//set fancybox title info to be the same as default image

	$(".fancybox").fancybox({
		title: '<h2>' + movieTitle + '</h2>' + '<p class="director">Director: ' + movieDirector + '</p><p class="dp">Director of Photography: ' + movieDP + '</p>',
		helpers : {
        title: {
            type: 'inside'
        }
    }
    });

	//preload images besides default image
	var preloads = [
	'images/eternalsunshine.jpg',
	'images/starwars.jpg',
	'images/jackiebrown.jpg',
	'images/treeoflife.jpg'
	];

	$.preloadImages = function() {
	  for (var i = 0; i < arguments.length; i++) {
	    $("<img />").attr("src", arguments[i]);
	  }
	}

	$.preloadImages('images/eternalsunshine.jpg','images/starwars.jpg','images/jackiebrown.jpg','images/treeoflife.jpg');

});