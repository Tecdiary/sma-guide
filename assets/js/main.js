jQuery(document).ready(function($){

	$(".sidebar, pre, .cd-faq-items").niceScroll({cursorcolor:"#098BCC",cursorborder:"1px solid #098BCC",cursorwidth:"5"});
	$('.tip').tooltip();
	
	$('#sidebar a').click(function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500, function(){
			window.location.hash = hash;
		});
	});
	$('.nav a').click(function(e) {
		e.preventDefault();
		return false;
	});
	$('body').bind('click', function(e) {
		$('#docs').removeClass('show-nav');
	});

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});

	$('.navicon').click(function(e) {
		$('#docs').toggleClass('show-nav');
		return false;
	});

	$(window).load(function(){
		$('body').scrollspy({ target: '#leftMenu' });
	});

	$(window).resize(function() {
		$('body').scrollspy('refresh');
	});
	
	$('.cd-faq-trigger').on('click', function(event){
		event.preventDefault();
		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});

	$('.toggle-faqs').click(function(event){
		event.preventDefault();
		if ($(this).hasClass('fa-toggle-off')) {
			$(this).removeClass('fa-toggle-off').addClass('fa-toggle-on');
		} else {
			$(this).removeClass('fa-toggle-on').addClass('fa-toggle-off');
		}
		var group_id = $(this).parents('.cd-faq-group').attr('id');
		$('#'+group_id).find('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});
	
});
