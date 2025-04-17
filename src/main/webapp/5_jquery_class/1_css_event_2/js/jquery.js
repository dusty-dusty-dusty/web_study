/**
 *
 * 	//mouseenter/mouse
	//mouseover/mouseout
	//hover
 * 
 *  
 */

$ (document).ready(function(){
	
	$('.rollover img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off','_on') );
		
	},function(){
		$(this).attr('src', $(this).attr('src').replace('_on','_off') );
		
	});
		
})