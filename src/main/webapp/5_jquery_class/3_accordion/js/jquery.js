/**
 * 
 */
$(document).ready(function(){
	
	$('.accordion').each(function(){
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		allDd.first().show();
		
		allDt.css('cursor','pointer');
		
		allDt.click(function(){
			
			
			allDd.hide();//모든 dd 닫기.
			$(this).next().show();
			
			
			
		})
		
	})
	
})