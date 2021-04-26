$(document).ready(function(){
    
    $(".accord_title").click(function(){
        $(".accord_content").slideToggle("slow");
        $(".accord_content1").css("display","none");
        $(".accord_content2").css("display","none");
        $(".accord_title").toggleClass("main");
        $(".accord_title1").removeClass("main");
        $(".accord_title2").removeClass("main"); 
        $(".accord_first").toggleClass("bs");    
    });
    $(".accord_title1").click(function(){
        $(".accord_content1").slideToggle("slow");
        $(".accord_content").css("display","none");
        $(".accord_content2").css("display","none");
        $(".accord_title1").toggleClass("main");
        $(".accord_title").removeClass("main");
        $(".accord_title2").removeClass("main");
        $(".accord_first1").toggleClass("bs");  
    });
    $(".accord_title2").click(function(){
        $(".accord_content2").slideToggle("slow");
        $(".accord_content1").css("display","none");
        $(".accord_content").css("display","none");
        $(".accord_title2").toggleClass("main");
        $(".accord_title").removeClass("main");
        $(".accord_title1").removeClass("main"); 
        $(".accord_first2").toggleClass("bs"); 
    });

    $(".ct").counterUp({
        delay: 10,
        time: 2000
    });
    $(".testimonial-slide").owlCarousel({
        loop:true,        
        nav:false,
        margin: 18,
        dots:true,
        autoplay: false,    
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:1,
                dotsEach: 1,
            },
           1200:{
                items:2
            },
          
        }
    });

    $(".logo_slide").owlCarousel({
        loop:true,        
        nav:false,
        margin: 18,
        dots:false,
        autoplay: false,    
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:6
            },
           1200:{
                items:6
            },
          
        }
    });
    $(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 10) {
            $('header1.fixed-top').addClass('nav-fixed');
	    } else {
            $('header1.fixed-top').removeClass('nav-fixed');
	    }

    });

    $(".menu_search-icon").click(function(){
        $(".search_wrap").addClass("show");
        $(".search_overlay").addClass("show");
    });
    
    $(".close-search").click(function(e){
        e.stopPropagation()
        $(".search_wrap").removeClass("show");
        $(".search_overlay").removeClass("show");    
    });
    $(".menu_bar").click(function(){
        $(".wrapper").addClass("show");
        $(".page-mobile-main-menu").addClass("show");
    });
    $(".page-close-mobile-menu").click(function(){
        
        $(".wrapper").removeClass("show");
        $(".page-mobile-main-menu").removeClass("show");    
    });
    $(".nen").click(function(){
        $("#myVideo").css("display","none");
    });
    $("#btn").click(function(){
        $("#myVideo").css("display","flex");
    });

    var btn = $('#button');
    
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    $(window).on('load', function() {
		setTimeout(function () {
            $(".sub").addClass("show");
		}, 800);
	});
    $(".close").click(function(){
        $(".sub").removeClass("show");
    });
    $(".sub").click(function(){
        $(".sub").removeClass("show");
    });
    

    $(".menu2").click(function(e){
        e.stopPropagation()
        $(".menu_search-icon").slideToggle("slow");
          
    });
    $(".menu1").click(function(e){
        e.stopPropagation()
        $(".menu-item1").slideToggle("slow");
          
    });
    $(".menu2a").click(function(e){
        e.stopPropagation()
        $(".menu-item2").slideToggle("slow");
          
    });
    $(".menu3a").click(function(e){
        e.stopPropagation()
        $(".menu-item3").slideToggle("slow");
          
    });
    $(".menu4").click(function(e){
        e.stopPropagation()
        $(".menu-item4").slideToggle("slow");
          
    });
    $(".menu5").click(function(e){
        e.stopPropagation()
        $(".menu-item5").slideToggle("slow");
          
    });
    $(".menu6").click(function(e){
        e.stopPropagation()
        $(".menu-item6").slideToggle("slow");
          
    });

});
