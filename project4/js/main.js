
$(function(){

	/*mobile*/
	$(".m_tab").on("click", function(e){
		e.preventDefault();
		if($(".m_tab").hasClass("close") == false){
			$(this).addClass("close");
			$(".mobile").addClass("active");
			$(".m_dim").addClass("active");
			$("body").addClass("fixed");
		} else {					
			$(".m_tab").removeClass("close");
			$(".mobile").removeClass("active");
			$(".m_dim").removeClass("active");
			$("body").removeClass("fixed");
		}
	});
	$(".m_dim").on("click", function(){
		$(".m_tab").removeClass("close");
		$(".mobile").removeClass("active");
		$(".m_dim").removeClass("active");
		$("body").removeClass("fixed");
	});

	/*main_slider*/
	var s_menu = ["WORX", "SERVICE", "ABOUT"]
	var main_swiper = new Swiper('.visual .swiper-container', {
			effect: 'fade',
			autoplay: {
				delay: 4000,
				disableOnInteraction : false,
			},
			speed: 2000,
			loop: true,
			pagination: {
				el: '.visual .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1 +".") + (s_menu[index]) + '</span>';
			},
		},		
	});
	
	var w;
	$(window).on("resize", function(){
		w = $(window).width();
		if( w > 460){
			$(".m_tab").removeClass("close");
			$(".mobile").removeClass("active");
			$(".m_dim").removeClass("active");
			$("body").removeClass("fixed");
		}
	});


	var t = 0;
	var n = 0; //페이지 index
	var page_n = 0; //페이지 상단값
	var page_active = true; //페이지 활성화

	$(window).on("scroll", function(){

		t = $(window).scrollTop();	

		if( t > 70 ){
			$(".menu_zone").addClass("fixed");
			$(".go_top").show();
		}
		else {
			$(".menu_zone").removeClass("fixed");
			$(".go_top").hide();
		}

		// 해당페이지로
		if(t < $(".page1").offset().top){
			n = 0;
		} else if(t < $(".page2").offset().top){
			n = 1;
		} else if(t < $(".page3").offset().top){
			n = 2;
		} else if(t < $(".page4").offset().top){
			n = 3;

			if ($(document).height() <= Math.round(t + $(window).height()) ) {
				n = 4;
			}			
		} else {
			n = 4;
		}

		if(page_active == true){
			$(".page"+n).addClass("on");
		}
		if(n == 5){
			page_active = false;
		}

		$(".p_contoller li").removeClass("active");
		$(".p_contoller li").eq(n).addClass("active");
	});	

	$(window).trigger("scroll");

	$(".go_top").click(function(e){ // 맨 위로 가기
		e.preventDefault();
		$("html, body").animate({ scrollTop : 0 }, 1000);
	});

	$("#gnb li, .mobile li, .p_contoller li").click(function(e){
		e.preventDefault();

		n = $(this).index();

		if(n == 0){
			$("html, body").animate({ scrollTop :0 }, 1000);
		} else {
			page_n = $("#content div[class^=page]").eq(n-1).offset().top+10;
			$("html, body").animate({ scrollTop : page_n }, 1000);
		}
	});

	
});