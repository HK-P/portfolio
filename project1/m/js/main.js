$(function(){
	//scroll
	var scroll_h; //윈도우 스크롤값

	$(window).scroll(function(){
		scroll_h = $(this).scrollTop();

		if(scroll_h > 0){
			$("#header").addClass("open");
		} else {
			$("#header").removeClass("open");
		}
	});

	//mobile_menu
	$(".tab").click(function(e){
		e.preventDefault();
		scroll_h = $(window).scrollTop();

		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$("#header").addClass("open");
			$("#m_menu").addClass("open");
			$(".dim").addClass("active");
			$("body").addClass("fixed");
		} 
		else {
			$(this).removeClass("active");
			if(scroll_h > 0){
				$("#header").addClass("open");
			} else {
				$("#header").removeClass("open");
			}
			
			$("#m_menu").removeClass("open");
			$(".dim").removeClass("active");
			$("body").removeClass("fixed");
			$(".m_gnb ul").slideUp(300);
		}
	});

	$(".m_gnb > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$(".m_gnb > li").removeClass("active");
			$(this).addClass("active");

			$(".m_gnb ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		} else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});

	$(".dim").click(function(e){
		e.preventDefault();
		scroll_h = $(window).scrollTop();

		$(".tab").removeClass("active");
		if(scroll_h > 0){
			$("#header").addClass("open");
		} else {
			$("#header").removeClass("open");
		}
		$("#m_menu").removeClass("open");
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
		$(".m_gnb ul").slideUp(300);

		$(".family dt a").removeClass("active");
		$("#footer .family dd").slideUp(400);

	});

	//main_slider
	var main_swiper = new Swiper('.main_slider .swiper-container', {
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});

	//product slider
	var swiper = new Swiper('.product .swiper-container', {
		slidesPerView: 1.5,
		spaceBetween: 20,
		centeredSlides: true,
		pagination: {
			el: '.product .swiper-pagination',
		},
	});

	//global map
	var p = 0;
	$(".map_tab li").eq(p).addClass("active");
	$(".map .pin span").eq(p).addClass("active");
	$(".map .list > div").eq(p).addClass("active");


	$(".map_tab li").click(function(e){
		e.preventDefault();
		p = $(this).index();

		$(".map_tab li").removeClass("active");
		$(this).addClass("active");

		$(".map .pin span").removeClass("active");
		$(".map .pin span").eq(p).addClass("active");

		$(".map .list > div").removeClass("active");
		$(".map .list > div").eq(p).addClass("active");
	});


	//family
	$(".family dt a").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".dim").addClass("active");
			$("body").addClass("fixed");

			$("#footer .family dd").slideDown(400);
		}
		
	});

	$(".family .close").click(function(e){
		e.preventDefault();

		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
		$(".family dt a").removeClass("active");
		$("#footer .family dd").slideUp(400);
	});
});