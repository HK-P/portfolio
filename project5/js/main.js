$(function(){
	var n = 0; // index
	var w = 0; // window.width
	$(".utils .lang li").eq(n).addClass("active");
	$(".m_menu .lang li").eq(n).addClass("active");

	// pc gnb
	$("#gnb > ul > li").mouseenter(function(){

		$("#gnb li").removeClass("active");
		$(this).addClass("active");

		$(".menu_zone").addClass("active");
		$(".logo img").attr("src","images/ft_logo.png");
		$(".util li").eq(0).find("img").attr("src","images/icon_my_02.png");
		$(".util li").eq(1).find("img").attr("src","images/icon_cart_02.png");
		$(".util li").eq(2).find("img").attr("src","images/icon_search_02.png");

		$(this).find("ul").addClass("active");
		
		if($(this).find("ul").length > 0){ //li의 하위 ul이 있으면
			$(".menu_zone").css({ "height" : 135});
		} else {
			$(".menu_zone").css({ "height" : 75});
		}

	});

	$("#gnb").mouseleave(function(){
		$("#gnb li").removeClass("active");
		$(".menu_zone").removeClass("active");
		$(".logo img").attr("src","images/logo.png");
		$(".util li").eq(0).find("img").attr("src","images/icon_my_01.png");
		$(".util li").eq(1).find("img").attr("src","images/icon_cart_01.png");
		$(".util li").eq(2).find("img").attr("src","images/icon_search_01.png");

		$("#gnb ul ul").removeClass("active");
	});

	// mobile gnb
	$(".m_tab").click(function(e){ //열기
		e.preventDefault();
		$(".m_menu").addClass("active");
		$("body").addClass("fixed");
	});
	$(".btn_close").click(function(e){ //닫기
		e.preventDefault();
		$(".m_menu").removeClass("active");
		$("body").removeClass("fixed");

		$("#m_gnb li").removeClass("active");
		$("#m_gnb li").find("ul").slideUp(400);
		$("#m_gnb li").css({ "border-color" : "#f2f2f2" });
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();
	
		if($(this).hasClass("active") == false){ //열림
			$("#m_gnb li").removeClass("active");
			$(this).addClass("active");
			$("#m_gnb li ul").slideUp(400); 
			$("#m_gnb li").css({ "border-color" : "#f2f2f2" });	
			$(this).find("ul").slideDown(400);


			if($(this).find("ul").length > 0){ //li의 하위 ul이 있으면
				$(this).css({ "border-color" : "#d9d9d9" });
			}
		} else { //닫힘
			$(this).removeClass("active");
			$(this).find("ul").slideUp(400); 
			$(this).css({ "border-color" : "#f2f2f2" });			
		}
	});

	$(window).resize(function(){
		w = $(window).width();
		if(w > 940){
			$(".m_menu").removeClass("active");
			$("body").removeClass("fixed");
			$("#footer .util").slideDown(300);
		}
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");

	var pageN = 0;
	var t; // 윈도우높이
	var pos; //위치
	var timer;

	$(window).scroll(function(){
		clearTimeout(timer);

		timer = setTimeout(function(){
			t = $(window).scrollTop();
			if(t < $(".page1").offset().top){
				pageN = 0;
			} else if(t < $(".page2").offset().top){
				pageN = 1;						
			} else if(t < $(".page3").offset().top){
				pageN = 2;
			} else if(t < $(".page4").offset().top){
				pageN = 3;
			} else if(t < $(".page5").offset().top){
				pageN = 4;
				if($(document).height() <= Math.round($(window).height() + t)){
					pageN = 5;
				}
			} else {
				pageN = 5;
			}

			if(pageN < 1) {
				$(".controller").removeClass("active");
			} else {
				$(".controller").addClass("active");
			}

			if(pageN == 4){
				$(".controller").addClass("colored");
			} else{
				$(".controller").removeClass("colored");
			}
			
			$(".controller li").removeClass("active");
			$(".controller li").eq(pageN-1).addClass("active");


		}, 100);

	});

	$(".controller li").click(function(e){
		e.preventDefault();
		pageN = $(this).index();
		pos = $(".page"+(pageN+1)).offset().top;

		$("html").animate({ "scrollTop" : pos+10 }, 500);

		//console.log(pageN);
	});

	//main_slide
	var main_swiper = new Swiper('.main_slide .swiper-container', {
		effect: 'fade',
		speed : 500,
		loop : true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			clickable : true,
			el: '.main_slide .swiper-pagination',
		},
	});

	$(".control .btn_play").click(function(e){
		e.preventDefault();

		if($(this).hasClass("pause") == false){
			$(this).addClass("pause");
			main_swiper.autoplay.stop();
		} else {
			$(this).removeClass("pause");
			main_swiper.autoplay.start();			
		}
	});

	//page1 slide
	var page1_swiper = new Swiper('.page1 .slide .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 10,

		// using "ratio" endpoints
		breakpoints: {
			1302: {
				touchRatio: 0,
				slidesPerView: 4,
				spaceBetween: 15,
			},
			940: {
				touchRatio: 1,
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			720: {
				touchRatio: 1,
				slidesPerView: 2.5,
				spaceBetween: 10,
			},
			500: {
				touchRatio: 1,
				slidesPerView: 1.5,
				spaceBetween: 10,
			},
		},
	});

	//page2 slide
	var page2_swiper = new Swiper('.page2 .slide .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			1302: {
				touchRatio: 0,
				slidesPerView: 4,
				spaceBetween: 15,
			},
			940: {
				touchRatio: 1,
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			720: {
				touchRatio: 1,
				slidesPerView: 2.5,
				spaceBetween: 10,
			},
			500: {
				touchRatio: 1,
				slidesPerView: 1.5,
				spaceBetween: 10,
			},			
		},
	});


	//page4 slide
	var slideN = 0;
	var total = 3; //슬라이드개수(4)
	var down = false; //마우스 눌림
	var moving = false; //움직임
	var direction = ""; //방향
	var xDown = 0; // 첫 x좌표
	var yDown = 0; // 첫 y좌표
	var pos = 0; //이동좌표

	$(".page4 .bg .img").eq(slideN).addClass("active");

	$(".page4 .slide ul").mousedown(function(e){
		down = true; //마우스 눌림
		xDown = e.clientX;
		yDown = e.clientY;
	});
	$(".page4").mouseup(function(){	
		down = false;
		moving = false;
	});
	$(".page4").mouseleave(function(){
		down = false;
		moving = false;
	});
	$(".page4 .slide ul").mousemove(function(e){
		e.stopPropagation();

		if(down == false) return;
		if(moving == true) return;
		moving = true;

		direction = swipeAPI(e, xDown, yDown);
		if(direction == "left"){ //다음컨텐츠
			//console.log("left");
			if(slideN < total){
				slideN = slideN+1;
				$(".page4 .slide_btn .prev").removeClass("disabled");
			}
			else {
				down = false;
				moving = false;
				return;
			}

			if(slideN == total){
				$(".page4 .slide_btn .next").addClass("disabled");
			}
		}
		else if(direction == "right"){ //이전컨텐츠
			//console.log("right");
			if(slideN > 0){
				slideN = slideN-1;
				$(".page4 .slide_btn .next").removeClass("disabled");
			}
			else {
				down = false;
				moving = false;
				return;
			}

			if(slideN == 0){
				$(".page4 .slide_btn .prev").addClass("disabled");
			}
		}

		pos = (-1)*100*slideN+"%";
		$(this).animate({"left" : pos}, 500, function(){
			down = false;
			moving = false;

			$(".page4 .bg .img").removeClass("active");
			$(".page4 .bg .img").eq(slideN).addClass("active");
		});
	});

	function swipeAPI(evt, xd, yd){
		var moveDirection="";
		var xUp=evt.clientX;
		var yUp=evt.clientY;
		var xDiff=xd-xUp;
		var yDiff=yd-yUp;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			if(xDiff > 0){
				moveDirection="left";
			}
			else{
				moveDirection="right";
			}
		}
		else{
			if(yDiff > 0){
				moveDirection="up"
			}
			else{
				moveDirection="down";
			}
		}
		return moveDirection;
	}

	// .page4
	$(".page4 .slide_btn .prev").addClass("disabled");
	$(".slide_btn .prev").click(function(e){ //슬라이드이전
		e.preventDefault();
		if(slideN > 0){
			slideN = slideN-1;
			$(".page4 .slide_btn .next").removeClass("disabled");
			
		}
		if(slideN == 0){ //비활성
			$(this).addClass("disabled");
		}
		pos = (-1)*100*slideN+"%";
		$(".page4 .slide ul").animate({"left" : pos}, 500, function(){
			$(".page4 .bg .img").removeClass("active");
			$(".page4 .bg .img").eq(slideN).addClass("active");
		});
	});

	$(".slide_btn .next").click(function(e){ //슬라이드다음
		e.preventDefault();

		if(slideN < total){
			slideN = slideN+1;
			$(".page4 .slide_btn .prev").removeClass("disabled");
		}
		if(slideN == total){ //비활성
			$(this).addClass("disabled");
		}
		pos = (-1)*100*slideN+"%";
		$(".page4 .slide ul").animate({"left" : pos}, 500, function(){
			$(".page4 .bg .img").removeClass("active");
			$(".page4 .bg .img").eq(slideN).addClass("active");
		});
	});

	//#footer
	$("#footer .clause").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$("#footer .util").slideDown(300);

			if($("#footer .family").hasClass("active") == true){
				$("#footer .family").removeClass("active");
				$("#footer .family_site").slideUp(300);
			}
		} else {
			$(this).removeClass("active");
			$("#footer .util").slideUp(300);
		}
	});

	$("#footer .family").click(function(e){
		e.preventDefault();
		w = $(window).width();

		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$("#footer .family_site").slideDown(300);

			if(w < 940){
				if($("#footer .clause").hasClass("active") == true){
					$("#footer .clause").removeClass("active");
					$("#footer .util").slideUp(300);
				}
			}
		} else {
			$(this).removeClass("active");
			$("#footer .family_site").slideUp(300);
		}
	});
});