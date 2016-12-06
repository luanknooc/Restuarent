$(document).ready(function(){	
	
	//TopBar
	if($('.navbar').length){
		var navbar = function(){
			if($(window).scrollTop() > 1){
				$('.navbar-brand img').css({'width':'95%'});
				$('.navbar').css({'margin-top':'-5px'});
			}else{
				$('.navbar-brand img').css({'width':'100%'});
				$('.navbar').css({'margin-top':'0px'});
			}
		};
		navbar();
		$(window).on('scroll', function(){
			navbar();
		});
	}
	
	//To Top
	if($('#toTop').length){
		var toTop = function(){
			if($(window).scrollTop() > 1){
				$('#toTop').css({'bottom':'20px'});
			}else{
				$('#toTop').css({'bottom':'-110px'});
			}
		};
		toTop();
		$(window).on('scroll', function(){
			toTop();
		});
		
		$('#toTop').on('click', function(e){
			event.preventDefault();
			$('html,body').animate({scrollTop : 0}, 800);
		});
	}
	
	//Animate anchor link
	$('.mainNav a').on('click', function(e){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 800);
	});

	
	//Popup
	$('#priceList img').on('click', function(e){
		event.preventDefault();
		$('.popup').addClass('visible');
	});
	
	$('.popup').on('click', function(e){
		event.preventDefault();
		if($(event.target).is('.popup') || $(event.target).is('.close')) {
			$('.popup').removeClass('visible');
		}
	});
	
	$(document).keyup(function(){
		if(event.which=='27'){
			$('.popup').removeClass('visible');
		}
	});
	
	//Margin Popup
	var marTop = ($('.popup-container').height() + 24) / 2; 
	var marLeft = ($('.popup-container').width() + 24) / 2;
	$('.popup-container').css({'margin-top':-marTop, 'margin-left':-marLeft});
	
});