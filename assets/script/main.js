'use strict';
$(window).on("load", function () {
	setTimeout(function () {
		$('.loading').fadeOut();
	}, 1500);
	setTimeout(function () {
		$('header').fadeIn();
		$('.scroll').fadeIn();
	}, 2500);
	setTimeout(function () {
		$('.enter-site').addClass('loaded');
	}, 2500);
});

$('.nav li:last-child a').addClass('os');

$(document).ready(function () {
	getOS();
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

$('.header').scrollToFixed();
var lastScrollTop = 0;
$(window).scroll(function (event) {
	var st = $(this).scrollTop();
	if (st > lastScrollTop) {
		$('.gototop').show();
	} else {
		$('.gototop').hide();
	}
	lastScrollTop = st;
});

$('.hamberger').on('click', function () {
	$('.nav, .hamberger').toggleClass('active');
});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
	responsive: [{
		breakpoint: 600,
		settings: {
			arrows: true
		}
	}]
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: false,
	focusOnSelect: true
});

$('.slider-for,.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	var data = { "event": "command", "func": "pauseVideo", "args": "" };
	var message = JSON.stringify(data);
	$("iframe", slick.$slides[currentSlide])[0].contentWindow.postMessage(message, '*');
});

// home-vid
$('.friend').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.bubble'
});
$('.bubble').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.friend',
	dots: false,
	centerMode: false,
	focusOnSelect: true
});
$('.bubble .slick-slide').mouseover(function () {
	$(this).click();
});

$('.friend-in').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000
});

// home-phone-slide
$('.howto-slide').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000
});

$('.howto-slide-how').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.group-wrap',
	swipe: false
});
$('.group-wrap').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: '.howto-slide-how',
	dots: false,
	centerMode: false,
	focusOnSelect: true,
	vertical: true,
	swipe: false
});

$('.popup-slide').slick({
	infinite: true,
	slidesToShow: 4,
	arrows: false,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			arrows: true
		}
	}]
});

$('.slide-wrap-activity').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	responsive: [{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			arrows: true
		}
	}]
});

$('.promote-slide').slick({
	dots: false,
	infinite: true,
	arrows: false,
	slidesToShow: 4,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [{
		breakpoint: 770,
		settings: {
			slidesToShow: 2
		}
	}]
});

$('.banner-slide').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true
});

// home-popup
$('.popup-active').on('click', function (event) {
	event.preventDefault();
	$('.popup').addClass('active');
});
$('.close').on('click', function (event) {
	event.preventDefault();
	$('.popup').removeClass('active');
});

var jq_version = $().jquery;
if (jq_version == '1.11.0') {
	var onScrollInit = function onScrollInit(items, trigger) {
		items.each(function () {
			var osElement = $(this),
			    osAnimationClass = osElement.attr('data-os-animation'),
			    osAnimationDelay = osElement.attr('data-os-animation-delay');

			osElement.css({
				'-webkit-animation-delay': osAnimationDelay,
				'-moz-animation-delay': osAnimationDelay,
				'animation-delay': osAnimationDelay
			});

			var osTrigger = trigger ? trigger : osElement;

			osTrigger.waypoint(function () {
				osElement.addClass('animated').addClass(osAnimationClass);
			}, {
				triggerOnce: true,
				offset: '90%'
			});
		});
	};

	onScrollInit($('.os-animation'));
	onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
}

function getOS() {
	var userAgent = window.navigator.userAgent,
	    platform = window.navigator.platform,
	    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	    os = null,
	    osDet = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
		osDet = 'https://apple.co/2Mb62v3';
		$('.os').attr('href', osDet);
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
		osDet = 'https://apple.co/2Mb62v3';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
		osDet = 'https://bit.ly/2sNB0jY';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
		osDet = 'https://bit.ly/2sNB0jY';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
		osDet = 'https://bit.ly/2sNB0jY';
	}

	return osDet;
}

$('.tabs li').on('click', function (e) {

	e.preventDefault();

	$('dt').removeClass('active');
	$('dt:nth-child(2)').addClass('active');

	var $this = $(this);
	var tab = $this.find('a').attr('href');
	var tabDetail = $this.parents('.faq-page-wrap').find('.tabs-detail-inner');

	$this.addClass('active').siblings().removeClass('active');
	tabDetail.removeClass('active');
	$this.addClass('active');

	tabDetail.fadeOut();
	$(tab).fadeIn();
});

$('.slide1').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 3,
	initialSlide: 0,
	// autoplay: true,
	// infinite: false,
	responsive: [{
		breakpoint: 480,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}]
});

$('.slide2').slick({
	slidesToShow: 1,
	infinite: true,
	initialSlide: 0
});


$('.slide4').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 3,
	initialSlide: 0,
	// infinite: false,
	responsive: [{
		breakpoint: 770,
		settings: {
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		}
	}, {
		breakpoint: 480,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}]
});

$('.slide5').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 5,
	initialSlide: 0,
	// infinite: false,
	responsive: [{
		breakpoint: 770,
		settings: {
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		}
	}, {
		breakpoint: 480,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}]
});

$('.slide6').slick({
	slidesToShow: 1,
	infinite: true,
	initialSlide: 0

});
$('.slide7').slick({
	slidesToShow: 1,
	infinite: true,
	initialSlide: 0
});