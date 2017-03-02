$(document).ready(function() {
  $(".lightbox").colorbox({iframe:true, width:"80%", height:"80%", fixed:true});
  
 $(".displayedtext").click(function(){
        $(".displayedtext_ls_gen_showpanel").toggle();
    });

	$(".test1").click(function(){
		//$("#svg_1-0").toggle();
		$("#svg_1-0").slideToggle(200);
	});

	$(".test2").click(function(){
		//$("#svg_1-1").toggle();
		$("#svg_1-1").slideToggle(200);
	});

	$(".test3").click(function(){
		//$("#svg_basic_1-1").toggle();
		$("#svg_basic_1-1").slideToggle(200);
	});
	
	$(".test4").click(function(){
		//$("#svg_tiny_1-1").toggle();
		$("#svg_tiny_1-1").slideToggle(200);
	});
	
	$(".test5").click(function(){
		//$("#svg_tiny_1-1plus").toggle();
		$("#svg_tiny_1-1plus").slideToggle(200);
	});
	
	$(".test6").click(function(){
		//$("#svg_tiny_1-2").toggle();
		$("#svg_tiny_1-2").slideToggle(200);
	});

});