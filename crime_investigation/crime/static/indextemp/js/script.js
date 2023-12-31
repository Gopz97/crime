(function($) {

	"use strict";
/*====================================================================
					Hide Loading Box (Preloader)
=====================================================================*/	
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
/*====================================================================
					Update Header Style and Scroll to Top
=====================================================================*/
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();
/*====================================================================
					Submenu Dropdown Toggle
=====================================================================*/
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	if($('.header-style-two').length){

		$("#toggle-menu-btn").on("click", function() {
		    $('#side-nav').toggleClass('active');
		});
		$("#nav-close").on("click", function() {
		    $('#side-nav').removeClass('active');
		    $("#nav-open").fadeIn()
		});

		$("#side-nav ul ul").parent().addClass("menu-item-has-children");
        $("#side-nav ul ul").slideUp();
	    $("#side-nav ul li.menu-item-has-children > a").on("click", function() {
	        $(this).parent().toggleClass("active").siblings().removeClass("active");
	        $(this).next("ul").slideToggle();
	        $(this).parent().siblings().find("ul").slideUp();
	        return false;
		});
	}
/*====================================================================
   					Fact Counter + Text Count
=====================================================================*/
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
		},{accY: 0});
	}
	

/*====================================================================
					LightBox / Fancybox
=====================================================================*/
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
/*====================================================================
					Scroll to a Specific Div
=====================================================================*/
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}

/*====================================================================
					WOW Animation
=====================================================================*/
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
/*=======================================================================
   					When document is Scrollig, do
=======================================================================*/
	$(window).on('scroll', function() {
		headerStyle();
	});
/*=======================================================================
   					When document is loading, do
=======================================================================*/
	$(window).on('load', function() {
		handlePreloader();
	});	

/*========================================================================
					All Carousel Use In Template
========================================================================*/
	//Project Carousel
	if ($('.award-slider').length) {
		$('.award-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				},
			}
		});    		
	}

	//Awesome project Carousel
	if ($('.case-studies-slider').length) {
		$('.case-studies-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:3
				},
				1400:{
					items:5
				}
			}
		});    		
	}

	//testimonial Slider
	if ($('.testimonial-slider').length) {
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
			}
		});    		
	}

	if ($('.testimonial-slider-style-two').length) {
		$('.testimonial-slider-style-two').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
			}
		});    		
	}
	//testimonial Slider
	if ($('.intro-slider').length) {
		$('.intro-slider').owlCarousel({
			loop:true,
			margin:5,
			nav:false,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
			}
		});    		
	}

	//Gallery Slider
	if ($('.gallery-slider').length) {
		$('.gallery-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2	
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				},
			}
		});    		
	}

})(window.jQuery);

    
    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox").fancybox({
                openEffect  : 'elastic',
                closeEffect : 'elastic',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50
            });
    });
