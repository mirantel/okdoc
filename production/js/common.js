$(document).ready(function() {

// function element exists
jQuery.fn.exists = function() {
	return $(this).length;
}


$('.search-tabs-nav li').click(function(){
	if (!($(this).hasClass('is-active'))) $(this).addClass('is-active').siblings().removeClass('is-active')
		.parents().find('.search-block').eq($(this).index()).fadeIn(150).siblings('.search-block').hide();
	return false;
});

$('.city-select, .city-select .arr').click(function() {
	if ($(this).parent().hasClass('is-open')){
		$(this).parent().removeClass('is-open')
	}
	else{
		$(this).parent().addClass('is-open')
	};
	return false;
});

$('.sort-by-value').click(function(){
	if (!($(this).hasClass('is-active'))) $(this).addClass('is-active').siblings().removeClass('is-active');
});

//doctors schedule
if ($('#c1').exists()){
	$('#c1').cycle({
		fx:     'scrollHorz',
		timeout: 0,
		next:   '#c1-n',
		prev:   '#c1-p'
	});
};
$('.js-question').click(function(){
	if ($(this).next().hasClass('is-open')){
		$(this).next().slideUp().removeClass('is-open');
	}
	else{
		$(this).next().slideDown().addClass('is-open');
	};
});
$('.complain-link').click(function(){
	if ($(this).next().hasClass('is-open')){
		$(this).next().slideUp().removeClass('is-open');
	}
	else{
		$(this).next().slideDown().addClass('is-open');
	};
});
$('.complain-close').click(function(){
	$('.complain-drop').slideUp().removeClass('is-open');
});

//popups
if ($('.popup-close, .popup-wrap').exists()){
	$('.popup-close, .popup-wrap').click(function(){
		$('.popup').removeClass('is-shown');
		$('.popup-wrap').fadeOut('slow');
		return false;
	});
};
if ($('#js-doctor-type').exists()){
	$('#js-doctor-type').click(function(){
		$('.popup_doctors-type').addClass('is-shown');
		$('.popup-wrap').fadeIn('slow');
	});
};
if ($('#js-metro').exists()){
	$('#js-metro').click(function(){
		$('.popup_metro').addClass('is-shown');
		$('.popup-wrap').fadeIn('slow');
	});
};
if ($('#js-request').exists()){
	$('#js-request').click(function(){
		$('.popup_request').addClass('is-shown');
		$('.popup-wrap').fadeIn('slow');
		return false;
	});
};
if ($('.js-appointment').exists()){
	$('.js-appointment').click(function(){
		$('.popup_appointment').addClass('is-shown');
		$('.popup-wrap').fadeIn('slow');
		return false;
	});
};
if ($('#js-entry').exists()){
	$('#js-entry').click(function(){
		$('#js-auto').addClass('is-shown');
		$('.popup-wrap').fadeIn('slow');
		return false;
	});
};
if ($('#js-forgot').exists()){
	$('#js-forgot').click(function(){
		$('#js-auto').removeClass('is-shown');
		$('#js-pass').addClass('is-shown');
		return false;
	});
};
if ($('#js-back').exists()){
	$('#js-back').click(function(){
		$('#js-auto').addClass('is-shown');
		$('#js-pass').removeClass('is-shown');
		return false;
	});
};

// form-tabs
$('.clinic-prof-nav li').click(function(){
	if (!($(this).hasClass('is-active'))) $(this).addClass('is-active').siblings().removeClass('is-active')
		.parents('.clinic-prof').find('.js-clinic-tab').eq($(this).index()).fadeIn(150).siblings('.js-clinic-tab').hide();
	return false;
});

//select
$('.js-select span, .js-select input').click(function() {
	if ($(this).parent().hasClass('is-open')) {
		$(this).parent().removeClass('is-open')
		$(this).next().hide();
	}
	else {
		$('.js-select').removeClass('is-open');
		$('.js-scroll').hide();
		$(this).parent().addClass('is-open');
		$(this).next().show();
		$(this).next().jScrollPane({
			showArrows : true,
			autoReinitialise : false,
			verticalGutter: 0
		});
	};
});
$(document).click(function() {
	$('.js-select').removeClass('is-open');
	$('.js-scroll').hide();
});
$('.js-select').click(function(event){
    event.stopPropagation();
});
$('.js-select').find('li').click(function() {
	var val = $(this).text();
	$(this).parent().parent().parent().parent().prev().html(val);
	$(this).parent().parent().parent().parent().prev().val(val);
	$(this).parent().parent().parent().parent().hide();
	$(this).parent().parent().parent().parent().parent().removeClass('is-open');
});


{
			
		}
});