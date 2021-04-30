$(function(){
	var winW;

	$(window).resize(function(){
		winW = $(window).width();
		if(winW > 760){
			$("#header .tab").removeClass("close");
			$(".dim").removeClass("active");
			$(".m_menu").removeClass("active");
			$("#m_gnb li").removeClass("active");
			$("#m_gnb li").find("ul").slideUp(300);
			$("body").removeClass("fixed");
		}
	});
	$(window).trigger("resize");

	$("#header .tab").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass("close")){
			$("#header .tab").addClass("close");
			$(".dim").addClass("active");
			$(".m_menu").addClass("active");
			$("body").addClass("fixed");
		}
		else {
			$("#header .tab").removeClass("close");
			$(".dim").removeClass("active");
			$(".m_menu").removeClass("active");
			$("#m_gnb li").removeClass("active");
			$("#m_gnb li").find("ul").slideUp(300);
			$("body").removeClass("fixed");
		}
	});

	$("#m_gnb li").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass("active")){
			$("#m_gnb li").removeClass("active");
			$(this).addClass("active");
			$("#m_gnb li").find("ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	$(".dim").click(function(e){
		$("#header .tab").removeClass("close");
		$(".dim").removeClass("active");
		$(".m_menu").removeClass("active");
		$("#m_gnb li").removeClass("active");
		$("#m_gnb li").find("ul").slideUp(300);
		$("body").removeClass("fixed");
	});

	/*slide*/
	var swiper = new Swiper('.main_slide .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2000,
		},
    });
});