/**
 * 
 */

 $(function(){
	 
	 
	 
	 // 속성지정 : attr() -> prop
	 
	 $('.check-all').click(function(){
		 
		 /*//alert($(this).is(':checked'));
		 var checked = $(this).attr(checked);
		 $('.agree').attr('checked',checked);*/
		 
		 //$('.agree').prop('checked', $(this).is(':checked'))
		 if($(this).is(':checked')){
			 $('.agree').prop('checked', true);
		 }else{
			 $('.agree').prop('checked',false);
		 }
		 
	 });
	 
	 
	 
	 $('#signup > form').validate({
		 rules : {
			 name : {
				 required:true
			 },
			 email : {
				 required:true,
				 email:true
			 },
			 website : {
				 url : true
			 },
			 password : {
				 required : true,
				 minlength : 6,
				 maxlength : 12
			 },
			 passconf : {
				 equalTo : '#password'
			 }
		 },
		 success : function(label){
		 	label.addClass('valid');
		 	label.text('성공');
		 	}
	 })
	 
	 
	 
	 
 })