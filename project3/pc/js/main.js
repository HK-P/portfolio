$(document).ready(function(){
	//gnb
	var	n = 0;
	$("#gnb").mouseenter(function(){
		$("#header").addClass("open");
	});
	$("#header .header_area").mouseleave(function(){
		$("#header").removeClass("open");
	});
	//gnb focus
	$("#gnb > ul > li:first-child a").focusin(function(){
		$("#header").addClass("open");
	});
	$("#gnb .list li:last-child a").focusout(function(){
		$("#header").removeClass("open");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("open");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$("#gnb > ul > li").removeClass("open");
	});

	$("#header .header_area .language li").eq(n).addClass("on");
	$("#header .header_area .language").mouseenter(function(){				
		$(this).addClass("on");
	});
	$("#header .header_area .language").mouseleave(function(){
		$(this).removeClass("on");
	});

	// Scroll
	var w_scroll;
	var clickFlag = false; //
	
	$(window).scroll(function(){
		w_scroll = $(window).scrollTop();
		//console.log(w_scroll);
		
		if(w_scroll > 900) {
			$("#header").addClass("fixed");
			clickFlag = true;
		} else {
			$("#header").removeClass("fixed");
			clickFlag = false;
		}
	});
	//gnb 보이기
	$(".btn_menu .open_menu").click(function(e){
		if(clickFlag == false) return; // scroll 900 이하 미실행
		e.preventDefault();
		$("#header").removeClass("fixed");
	});
	$("#header .header_area").mouseleave(function(){
		if(clickFlag == false) return; // scroll 900 이하 미실행
		$("#header").addClass("fixed"); // scroll 900 이상 실행
	});			
	
	//top으로 바로가기
	$(".btn_menu .go_top").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop : 0
		}, 400);
	});
	//language 버튼
	$(".btn_menu .language li").eq(n).addClass("on");
	$(".btn_menu .language li").click(function(e){
		e.preventDefault();
		$(".btn_menu .language li").removeClass("on");
		$(this).parent().toggleClass("on");
		$(this).addClass("on");
	});

	// slider
	var slide_w = -100; // left(%)
	var distance = slide_w *n; // left값

	$(".slider ul").css({ "left" : distance+"%" }); // 처음에 보여지는 슬라이더
	$(".slider ul li").eq(n).find(".navy, .orange, .blue").addClass("active");

	$(".control .next").click(function(){				
		n = $(".slider ul li").eq(n).index();

		if (n < 2) {
			n = n + 1;
		}
		distance = slide_w *n;

		$(".slider ul").css({ "left" : distance+"%" });

		$(".slider ul li").eq(n).siblings().find(".navy, .orange, .blue").removeClass("active");
		$(".slider ul li").eq(n).find(".navy, .orange, .blue").addClass("active");
	});

	$(".control .prev").click(function(){				
		n = $(".slider ul li").eq(n).index();

		if (n > 0) {
			n = n - 1;
		}
		distance = slide_w *n;

		$(".slider ul").css({ "left" : distance+"%" });
		
		$(".slider ul li").eq(n).siblings().find(".navy, .orange, .blue").removeClass("active");
		$(".slider ul li").eq(n).find(".navy, .orange, .blue").addClass("active");
	});

	$(".control .play").click(function(){
		$(this).toggleClass("paused"); // 멈춤/재생 버튼전환
	});

	//product
	$(".product .list li").mouseenter(function(){
		$(".product .list").addClass("active");
		$(this).addClass("active");
	});
	$(".product .list li").mouseleave(function(){
		$(".product .list").removeClass("active");
		$(this).removeClass("active");
	});
	$(".product .list li").focusin(function(){
		$(".product .list").addClass("active");
		$(this).addClass("active");
	});
	$(".product .list li").focusout(function(){
		$(".product .list").removeClass("active");
		$(this).removeClass("active");
	});
	
	//recruit
	function loop(){
		$(".recruit li:nth-child(1)").animate({left:0, opacity:1},3500)
												.animate({left:10, opacity:0},3500, loop);
		setTimeout(function(){
			$(".recruit li:nth-child(2)").animate({left:10, opacity:0},3500)
												.animate({left:0, opacity:1},3500, loop), 4000;
		});
	}
	loop();
	
	//news
	var news_count = $(".news .news_list ul li").length; // ul li의 갯수				
		news_w = 325; // 305+20
		news_distance = 0; // ul의 left값
		newsbox = news_count * news_w; // ul width
		view = (-1)*(newsbox - (news_w *4)); //ul width - li width*4

	$(".news .news_list ul").css({ "width" : newsbox });

		//??????????????????????????????
	$(".news_control .prev").click(function(e){
		e.preventDefault();
		if(news_distance < 0){
			news_distance = news_distance + news_w;
		}
		$(".news .news_list ul").css({ "left" : news_distance });
	});
	$(".news_control .next").click(function(e){
		e.preventDefault();				
		if(news_distance > view){
			news_distance = news_distance - news_w;
		}
		//console.log(distance);
		$(".news .news_list ul").css({ "left" : news_distance });
	});
	
	//family
	$(".family a.btn").click(function(e){
		e.preventDefault();
	});
	$(".family").mouseenter(function(){
		$(this).addClass("on");
	});
	$(".family").mouseleave(function(){
		$(this).removeClass("on");
	});
	$(".family").focusin(function(){
		$(this).addClass("on");
	});
	$(".family li:last-child a").focusout(function(){
		$(".family").removeClass("on");
	});
});