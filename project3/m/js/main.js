$(document).ready(function(){
	//메뉴
	$(".menu_btn .btn").click(function(e){
		e.preventDefault();
		$("#mobile_gnb").addClass("active");
		$(".dim").addClass("active");
		$("body").addClass("fixed");
	});
	$("#mobile_gnb .close").click(function(){
		$("#mobile_gnb > ul > li").removeClass("active");
		$("#mobile_gnb").removeClass("active");
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});
	$(".dim").click(function(){
		$("#mobile_gnb > ul > li").removeClass("active");
		$("#mobile_gnb").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#mobile_gnb > ul > li").click(function(e){
		e.preventDefault();

		if( $(this).hasClass("active") == false ){ // .active가 없을 때
			$("#mobile_gnb > ul > li").removeClass("active");
			$(this).addClass("active");

			$("#mobile_gnb ul ul").slideUp(400); //2depth 전체 숨김
			$(this).find("ul").slideDown(400);
		}
		else { // .active가 있을 때
			$(this).removeClass("active");
			$(this).find("ul").slideUp(400); // 해당 2depth 숨김
		}
	});

	var last_scroll = $(window).scrollTop(),
		scroll_value = $(window).scrollTop();
				
	$(window).scroll(function(){
		scroll_value = $(this).scrollTop(); //현재 스크롤
		
		if(scroll_value > last_scroll){ //스크롤 내리면 메뉴 숨음
			$("#header .menu").addClass("close");
			$("#header .search_box").addClass("close");
		}
		else if (scroll_value < last_scroll){ //스크롤 올리면 메뉴 나옴
			$("#header .menu").removeClass("close");
			$("#header .search_box").removeClass("close");
		}
		
		last_scroll = scroll_value; //마지막 스크롤값이 기준
	});

	//메뉴-검색
	$("#header .menu_btn .search").click(function(e){
		e.preventDefault();
		$(this).toggleClass("close");
		$("#header .search_box").slideToggle(300);
	});

	//메인 슬라이더
	var main_swiper = new Swiper('.main_slider .swiper-container', {
		pagination: {
        	el: '.main_slider .swiper-pagination',
      	},
      	navigation: {
			nextEl: '.main_slider .swiper-button-next',
			prevEl: '.main_slider .swiper-button-prev',
		},
	});

	
	//서브 슬라이더 #content .news
	//슬라이더 tab
	var slider_n = 0;
	$("#content .news .tab li").eq(0).addClass("active");
	$(".news .slider_box .sub_slider").eq(slider_n).addClass("active");

	$("#content .news .tab li").click(function(e){
		e.preventDefault();

		slider_n = $(this).index();
		$("#content .news .tab li").removeClass("active");
		$(this).addClass("active");
		$(".news .slider_box .sub_slider").removeClass("active");
		$(".news .slider_box .sub_slider").eq(slider_n).addClass("active");
	});

	/*news*/
	var news_swiper = new Swiper('.news_slider .swiper-container', {
		observer: true,
	    observeParents: true,

		speed: 400,
		spaceBetween: 10,
		autoplay: {
		   delay: 3000,
		 },
		pagination: {
			el: '.news_slider .swiper-pagination',
		},
	});

	$(".news_slider a.play").click(function(e){
		e.preventDefault();
		if(news_swiper.autoplay.running){ //재생중일 떄
			$(this).addClass("paused");
			news_swiper.autoplay.stop();
		} else {
			$(this).removeClass("paused");
			news_swiper.autoplay.start();
		}
		
	});
	/*webzine*/
	var webzine_swiper = new Swiper('.webzine_slider .swiper-container', {
		observer: true,
	    observeParents: true,

		autoplay: {
		   delay: 3000,
		 },
		pagination: {
			el: '.webzine_slider .swiper-pagination',
		},
	});

	$(".webzine_slider a.play").click(function(e){
		e.preventDefault();
		if(webzine_swiper.autoplay.running){ //재생중일 떄
			$(this).addClass("paused");
			webzine_swiper.autoplay.stop();
		} else {
			$(this).removeClass("paused");
			webzine_swiper.autoplay.start();
		}
		
	});
	/*event*/
	var event_swiper = new Swiper('.event_slider .swiper-container', {
		observer: true,
	    observeParents: true,

		autoplay: {
		   delay: 3000,
		 },
		pagination: {
			el: '.event_slider .swiper-pagination',
		},
	});

	$(".event_slider a.play").click(function(e){
		e.preventDefault();
		if(event_swiper.autoplay.running){ //재생중일 떄
			$(this).addClass("paused");
			event_swiper.autoplay.stop();
		} else {
			$(this).removeClass("paused");
			event_swiper.autoplay.start();
		}
		
	});
	/*promote*/
	var promote_swiper = new Swiper('.promote_slider .swiper-container', {
		observer: true,
	    observeParents: true,

		autoplay: {
		   delay: 3000,
		 },
		pagination: {
			el: '.promote_slider .swiper-pagination',
		},
	});

	$(".promote_slider a.play").click(function(e){
		e.preventDefault();
		if(promote_swiper.autoplay.running){ //재생중일 떄
			$(this).addClass("paused");
			promote_swiper.autoplay.stop();
		} else {
			$(this).removeClass("paused");
			promote_swiper.autoplay.start();
		}
		
	});

	//recruit
	var recruit_swiper = new Swiper('.recruit_slider .swiper-container', {
		speed : 600,
		autoplay : {
			delay : 3500,
		},
		loop : true,
		slidesPerView: 1,
		spaceBetween: 20,
			// Responsive breakpoints
			breakpoints: {
			500: { // 500px 이상
				slidesPerView: 2,
				spaceBetween: 10
			}
		}
		
	});

	//footer family
	$(".family dt a").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){ //active 없으면 추가(메뉴보임)
			$(this).addClass("active");
			$(".family dd ul").slideDown(400);
		}		

		else { // active 있으면 삭제(메뉴숨김)
			$(this).removeClass("active");
			$(".family dd ul").slideUp(400);
		}	

	});
});