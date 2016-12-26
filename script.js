function myFunction() {
    if ($('body').scrollTop() > 780 || $(document.documentElement).scrollTop() > 780) {
        $('.t-left').show().animate({
			left : 0,
			right : 0,
			opacity: 1
			}, 800);
        $('.t-right').show().animate({
			right : 0,
			left : 0,
			opacity: 1
			}, 800);
		$('.t-middle').show().animate({
			bottom : 0,
			opacity: 1
			}, 800)
      
	}
}

			