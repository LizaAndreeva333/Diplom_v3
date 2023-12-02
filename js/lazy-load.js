$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(), //сохраняем высоту intro блока в переменную introH
		scrollOffSet = $(window).scrollTop(); //текущее количество пикселей



	/* Fixed header */
	checkScroll(scrollOffSet)

	$(window).on("scroll", function() {
		scrollOffSet = $(this).scrollTop(); //обновление значения

		checkScroll(scrollOffSet);

	});


	//функция чтобы header появлялся не только при скроллинге
	function checkScroll(scrollOffSet) {
		//если проскроллили дальше intro фиксируется header
		if(scrollOffSet >= introH) {
			header.addClass("fixed")
		} else {
			header.removeClass("fixed")
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	/* Menu nav toggle  */
	$("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

});