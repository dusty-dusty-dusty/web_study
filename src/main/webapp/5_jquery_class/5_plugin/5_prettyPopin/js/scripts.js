/**
 * 
 */

 $(function(){
	 
	 //첫번째 a 태그인경우
	 $('a:eq(0)').prettyPopin({
		 width: 500
	 });
	 
	  $('a:eq(1)').prettyPopin({
		 width	:	500
		 , callback :	function(){
							alert('팝업이 닫힘')
						}
	 });
	 
 })