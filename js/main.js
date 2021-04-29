$(function(){
	$("#header .tab").click(function(e){
		e.preventDefault();
		if($(this).hasClass("close")){
			$(this).removeClass("close");
			$(".dim").fadeOut(300);
			$("#m_gnb").fadeOut(300);
		}
		else {
			$(this).addClass("close");
			$(".dim").fadeIn(300);
			$("#m_gnb").fadeIn(300);
		}
	});

// 화면 마우스휠
	var pageN = 0; // 페이지번호
	var pageTotal = 6; // 총 페이지
	var winH; // window 높이
	var pos = 0; //이동거리
	var movingStop = false; // 페이지스크롤 멈춤
	var stopPageN; // 스크롤이 멈추는 페이지
	var skillDraw = false; // .page1 tools

	$(window).resize(function(){
		winH = $(window).height();
		
		pageMoving();
	});
	$(window).trigger("resize");

    $(".wrapper").mousewheel(function(e, delta){
    	if($("html").is(":animated")) return;

    	if(delta > 0){ //wheel up
    		if(pageN > 0){
    			pageN=pageN-1;
    		}
    	}
    	else { //wheel down
    		if(pageN < pageTotal){
    			pageN=pageN+1;
    		}
    	}
    	pageMoving();
    	//console.log(pageN);
    });

// 화면 위아래 버튼
	$(".control .up").click(function(e){
		e.preventDefault();
		if(pageN > 0){
			pageN=pageN-1;
		}
		pageMoving();		
	});
	$(".control .down").click(function(e){
		e.preventDefault();
		if(pageN < pageTotal){
			pageN=pageN+1;
		}
		pageMoving();
	});

// gnb	
	$(".menu li, #m_gnb li").click(function(e){
		e.preventDefault();
		pageN = $(this).index();

		pageMoving();
		$("#header .tab").removeClass("close");
		$(".dim").fadeOut(300);
		$("#m_gnb").fadeOut(300);
	});

	function pageMoving(){ // pageN으로 이동
		if(movingStop == false){
			if(pageN == 0){
				$(".control .up").hide();
				$(".control .down").show();
			}
			else if(pageN == pageTotal){
				$(".control .up").show();
				$(".control .down").hide();
			}
			else {
				$(".control .up").show();
				$(".control .down").show();
			}

			pos = winH * pageN;
	    	$("html").stop().animate({scrollTop : pos}, 800);
			//console.log(pageN);

			if(!skillDraw && pageN == 1){
				drawProgressHandler();
			}
    	}
	}
// page1 skill progressbar
	function drawProgressHandler(){
		drawProgressBar(skill1, 95, "HTML", "#7d8c98", "#7d8c98", 4);
		drawProgressBar(skill2, 90, "CSS", "#7d8c98", "#7d8c98", 4);
		drawProgressBar(skill3, 87, "jQuery", "#7d8c98", "#7d8c98", 4);
		drawProgressBar(skill4, 80, "JS", "#7d8c98", "#7d8c98", 4);
		drawProgressBar(skill5, 90, "PS", "#7d8c98", "#7d8c98", 4);
		drawProgressBar(skill6, 86, "XD", "#7d8c98", "#7d8c98", 4);
		skillDraw = true;
	}

	function drawProgressBar(id, percent, text, start, end, weight){
		var startColor=start;
		var endColor=end;
		var strokeWeight=weight;

		var bar=new ProgressBar.Circle(id, {
			color: endColor,
			strokeWidth: strokeWeight,
			trailWidth: 0,
			easing: "easeInOut",
			duration: 1500,
			text: {
				autoStyleContainer: false
			},
			from: {
				color: startColor,
				width: 0
			},
			to: {
				color: endColor,
				width: strokeWeight
			},
			step: function(state, circle) {
				circle.path.setAttribute("stroke", state.color);
				circle.path.setAttribute("stroke-width", state.width);

				var value=Math.round(circle.value()*percent);

				if(value === 0){
					circle.setText("");
				}
				else{
					circle.setText(text);
				}
			}
		});
		bar.text.style.fontFamily="'Noto Sans KR', 'Nanum Gothic'";
		bar.text.style.fontSize="0.875em";
		bar.text.style.color="#000";
		bar.animate("0."+percent);
	}

// page3 slide
	var swiper = new Swiper('.page3 .pc .swiper-container', {
		loop: true,
		effect: 'fade',
		pagination: {
			el: '.page3 .pc .swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.page3 .pc .swiper-button-next',
			prevEl: '.page3 .pc .swiper-button-prev',
		},
    });

// page5 aniamte
	//pc
	$(".pc_dim").mouseenter(function(){
		$(this).stop().fadeOut(300);
		movingStop = true;
		stopPageN = pageN;
	});
	$(".pc_img").mouseleave(function(){
		$(".pc_dim").stop().fadeIn(300);
		movingStop = false;
		pageN = stopPageN;
	});
	//mobile
	$(".mobile_dim").mouseenter(function(){
		$(this).stop().fadeOut(300);
		movingStop = true;
		stopPageN = pageN;
	});
	$(".mobile_img").mouseleave(function(){
		$(".mobile_dim").stop().fadeIn(300);
		movingStop = false;
		pageN = stopPageN;
	});

// AOS
	AOS.init();
});