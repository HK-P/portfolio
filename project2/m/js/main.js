$(function(){
	//scroll
	var logo1 = "url(images/logo_w.png)";
	var logo2 = "url(images/logo.png)";

	var prev_scroll = $(window).scrollTop();
	var now_scroll= $(window).scrollTop();

	$(window).scroll(function(){
		now_scroll = $(this).scrollTop(); //현재 스크롤

		if(now_scroll > prev_scroll){ //스크롤 내림
			$("#header .menu").addClass("hide");
		}
		else if (now_scroll < prev_scroll){ //스크롤 올림
			$("#header .menu").removeClass("hide");
			$("#header .menu").addClass("color");
			$("#header h1 a").css({"background-image" : logo2 });

			if(now_scroll == 0){
				$("#header .menu").removeClass("hide");
				$("#header .menu").removeClass("color");
				$("#header h1 a").css({"background-image" : logo1 });
			}
		}

		prev_scroll = now_scroll;
	});

	//menu
	$("#header .tab").click(function(e){
		e.preventDefault()

		if($(this).hasClass("close") == false){
			$(this).addClass("close");
			$("body").addClass("fixed");
		}
		else {
			$(this).removeClass("close");
			$("body").removeClass("fixed");
		}		
		$(".m_menu").addClass("active");
	});

	//m_gnb
	var n = 0;
	$("#m_gnb > ul > li").eq(n).addClass("active");
	$("#m_gnb > ul > li").click(function(e){
		e.preventDefault();
		n = $(this).index();

		$("#m_gnb > ul > li").removeClass("active");
		$("#m_gnb > ul > li").eq(n).addClass("active");
	});

	$(".m_menu a.close").click(function(e){
		e.preventDefault();

		$(".m_menu").removeClass("active");
		$("#header .tab").removeClass("close");
		$("body").removeClass("fixed");
	});

	//main_slider
	var main_swiper = new Swiper('.main_slider .swiper-container', {
		effect: 'fade',
		loop: true,
		speed: 800,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
     	pagination: {
	        el: '.main_slider .swiper-pagination',
	        renderBullet: function (index, className) {
        	return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
        },
        on: {
        	init: function () {
        		$('.main_slider .timebar').addClass('active');
				console.log('init');
			},
        },
      },
    });
		//main_slider timebar
    var sliderTimer = 0;
    
    $('.main_slider .timebar').addClass('active');

    main_swiper.on('activeIndexChange', function () { //인덱스 변경시
    	$('.main_slider .timebar').removeClass('active');

    	clearTimeout(sliderTimer);	
    	sliderTimer = setTimeout(function(){
    		$('.main_slider .timebar').addClass('active');
    	}, 1000);
	});


    //product tab
    slideN = 0;
    $(".product .tab li").eq(slideN).addClass("on");
    $(".product .list > div").eq(slideN).addClass("on");

    $(".product .tab li").click(function(e){
    	e.preventDefault();
    	slideN = $(this).index();

    	$(".product .tab li").removeClass("on");
    	$(this).addClass("on");
    	$(".product .list > div").removeClass("on");
    	$(".product .list > div").eq(slideN).addClass("on");
    });

    //subslide progressbar
	var subslide; //서브슬라이더 이름

	function subSlideBar(){
		var slideTotal = subslide.find(".swiper-pagination-total").text();
		var slideNow = subslide.find(".swiper-pagination-current").text();
		var progress = (100/slideTotal) * slideNow + "%";

		subslide.find(".progressbar span").css({ "width" : progress });
	}

	//product special
	var special_swiper = new Swiper('.special .swiper-container', {
		speed: 1500,
		loop: true,
		observer: true,
		observeParents: true, 
		slidesPerView: 1,
		spaceBetween: 15,
		// using "ratio" endpoints
		breakpoints: {
			400 : {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			720 : {
				slidesPerView: 2.5,
				spaceBetween: 15,
			},
			900 : {
				slidesPerView: 3,
				spaceBetween: 15,
			},
		},
		pagination: {
			el: '.special .swiper-pagination',
			type: 'fraction',
			 renderFraction: function (currentClass, totalClass, index, total) {
                return '<span class="' + currentClass + '">0 '+ index +' </span>' +
                    ' / ' +
                    '<span class="' + totalClass + '">0 '+ total +' </span>';
            },
		},
	});

	special_swiper.on("slideChange", function(){ //슬라이더 넘기면
		subslide = $(".special");
		subSlideBar();
	});


	//product normal
	var normal_swiper = new Swiper('.normal .swiper-container', {
		speed: 1500,
		loop: true,
		observer: true,
		observeParents: true, 
		slidesPerView: 1,
		spaceBetween: 15,
		// using "ratio" endpoints
		breakpoints: {
			400 : {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			720 : {
				slidesPerView: 2.5,
				spaceBetween: 15,
			},
			900 : {
				slidesPerView: 3,
				spaceBetween: 15,
			},
		},
		pagination: {
			el: '.normal .swiper-pagination',
			type: 'fraction',
		},
	});


	normal_swiper.on("slideChange", function(){ //슬라이더 넘기면
		subslide = $(".normal");
		subSlideBar();
	});



	//recruit
	var recruit_swiper = new Swiper('.recruit .swiper-container', {
		pagination: {
			el: '.recruit .swiper-pagination',
			type: 'fraction',
		},
	});

	recruit_swiper.on("slideChange", function(){ //슬라이더 넘기면
		subslide = $(".recruit");
		subSlideBar();
	});

	//news
	var listView = 0;

	$(".news .tab li").eq(listView).addClass("on");
	$(".news .list > div").eq(listView).addClass("on");

	$(".news .tab li").click(function(e){
    	e.preventDefault();
    	listView = $(this).index();

    	$(".news .tab li").removeClass("on");
    	$(this).addClass("on");

		$(".news .list > div").removeClass("on");
		$(".news .list > div").eq(listView).addClass("on");

    });

    // resize
	$(window).resize(function(){
		subslide = $(".special");
		subSlideBar();

		subslide = $(".normal");
		subSlideBar();

		subslide = $(".recruit");
		subSlideBar();
	});
	$(window).trigger("resize");


    //footer
    $("#footer .go_top").click(function(e){ // 맨 위로
    	e.preventDefault();

    	$("html").animate({scrollTop : 0}, 1000);
    });
});