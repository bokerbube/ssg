// JavaScript Document

$(document).ready(function(e) {
	
	var status = false;

	$('#icon').stop().click(function(e) {
		if (status == false) {
			IconCancel();
		} else {
			IconMenu();
		}
	});
	
	$('nav, #logo, section').stop().click(function(e) {
		if (status == true) {
			IconMenu();
		}
	});
	
	function IconCancel() {
		$('.icon-menu').stop().animate({top: '70px'}, 400);
		$('.icon-cancel').stop().animate({top: '0px'}, 300);
		
			$('header nav ul.firstlvl').stop().slideDown(300);
		
		status = true;
	}	
	
	function IconMenu() {
		$('.icon-menu').stop().animate({top: '0px'}, 300);
		$('.icon-cancel').stop().animate({top: '-70px'}, 400);
		
			$('header nav ul.firstlvl').stop().slideUp(300);
			
		
		status = false;
	}
	
	function RespMenu() {
		if( (($('ul.firstlvl a').children('li').length)*150 + 190) > $(window).width() ) {
			$('header #icon').css('display', 'block');

			$('header nav').css('box-shadow', '0 3px 2px rgba(0, 0, 0, 0.3)');
			$('header nav ul.firstlvl li, header nav').css('width', '100%');			
			$('header nav ul.firstlvl').css('display', 'none');		
			$('header nav ul.firstlvl li').css('float', 'none');			
			$('header nav ul.firstlvl li').css('padding', '25px 0 25px 0');
			$('header nav ul.firstlvl li').css('border-top', '1px solid rgba(89, 89, 89, 0.4)');
		} else {
			$('header #icon').css('display', 'none');

			$('header nav').css('box-shadow', '0 0px 0px rgba(0, 0, 0, 0)');
			$('header nav').css('width', 'auto');
			
			$('header nav ul.firstlvl').css('display', 'block');

			$('header nav ul.firstlvl li').css('float', 'left');

			$('header nav ul.firstlvl li').css('width', '150px');
			$('header nav ul.firstlvl li').css('padding', '25px 0 25px 0');
			$('header nav ul.firstlvl li').css('border-top', 'none');
		};
	}
	
	RespMenu();
	
	$(window).resize(function(e) {
		RespMenu();
		if (status == true) {
			IconMenu();
		}
	});
	
	$(window).scroll(function(e) {
		if (status == true) {
			IconMenu();
		}
	});
});