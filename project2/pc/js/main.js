$(function(){
	//main_slider
	var main_swiper = new Swiper('.main_slider .swiper-container', {
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 3000
		},
		navigation: {
			nextEl: '.main_slider .swiper-button-next',
			prevEl: '.main_slider .swiper-button-prev',
		},
		pagination: {
			el: '.main_slider .swiper-pagination',
			clickable: true,
		},
	});

	$(".control .play").click(function(e){
		e.preventDefault();
		if( $(this).hasClass("paused") == false ){
			$(this).addClass("paused");
			main_swiper.autoplay.stop();
		}
		else {
			$(this).removeClass("paused");
			main_swiper.autoplay.start();
		}
	});

	//공지사항
	var view;
	$(".news_list .title li").click(function(e){
		e.preventDefault();

		view = $(this).index();
		//console.log(view);

		$(".news_list .title li").removeClass("on");
		$(this).addClass("on");


		$(".news_list .view").removeClass("on");
		$(".news_list .view").eq(view).addClass("on");

	});

	//재무정보
	$(".ir .title li").click(function(e){
		e.preventDefault();

		view = $(this).index();
		//console.log(view);

		$(".ir .title li").removeClass("on");
		$(this).addClass("on");


		$(".ir .view").removeClass("on");
		$(".ir .view").eq(view).addClass("on");
	});

	//product
	//product
	var w = 300; // width
	var amount = 0; // 이동
	var slideAuto1 = setInterval(s_leftMoving, 4000); //자동재생

	// 전문의약품
	$(".special .btns .prev").click(function(e){ //이전버튼
		e.preventDefault();
		s_rightMoving();
		
	});
	$(".special .btns .play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("paused") == false){
			$(this).addClass("paused");
			clearInterval(slideAuto1); 
		} else {
			$(this).removeClass("paused");
			slideAuto1 = setInterval(s_leftMoving, 4000);
		}
	});

	$(".special .btns .next").click(function(e){ //다음버튼
		e.preventDefault();
		s_leftMoving();
	});

	function s_leftMoving(){
		amount -= w;

		$(".special .list ul").animate({ left : amount },600, function(){
			$(this).append($(".special .list ul li:first-child"));

			amount = 0;
			$(".special .list ul").css({ left : amount });
		});
	}
	function s_rightMoving(){
		$(".special .list ul").prepend($(".special .list ul li:last-child"));

		amount -= w;
		$(".special .list ul").css({ left : amount });
		amount += w;
		$(".special .list ul").animate({ left : amount },600);
	}

	var slideAuto2 = setInterval(n_rightMoving, 4000); //자동재생
	// 일반의약품
	$(".normal .btns .prev").click(function(e){ //이전버튼
		e.preventDefault();
		n_rightMoving();
		
	});
	$(".normal .btns .play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("paused") == false){
			$(this).addClass("paused");
			clearInterval(slideAuto2); 
		} else {
			$(this).removeClass("paused");
			slideAuto2 = setInterval(n_leftMoving, 4000);
		}
	});

	$(".normal .btns .next").click(function(e){ //다음버튼
		e.preventDefault();
		n_leftMoving();
	});

	function n_leftMoving(){
		amount -= w;

		$(".normal .list ul").animate({ left : amount },600, function(){
			$(this).append($(".normal .list ul li:first-child"));

			amount = 0;
			$(".normal .list ul").css({ left : amount });
		});
	}
	function n_rightMoving(){
		$(".normal .list ul").prepend($(".normal .list ul li:last-child"));

		amount -= w;
		$(".normal .list ul").css({ left : amount });
		amount += w;
		$(".normal .list ul").animate({ left : amount },600);
	}
});