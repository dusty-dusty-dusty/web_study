<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title> 고객관리 프로그램 </title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script type="text/javascript" >
$(function(){
	$('#btnInsert').click(function(){
		//[0]--폼의 통신
		/* $('form[name="inForm"]').attr('action','DataInput.jsp');
		$('form[name="inForm"]').submit(); */
		
		// --------ajax
		//(1) 입력값들을 얻어서 객체형식으로 만들어줘야함
		var param = {
			name 	: $('#name').val()
			, age 	: $('#age').val()
			, tel 	: $('#tel').val()
			, addr 	: $('#addr').val()
		}
		console.log(param);
		//(2) ajax
		$.ajax({
	      type: 'post'
	      , data: param
	      , url:	'DataInput.jsp'
	      , success : function(data) {
	    	  //alert("<"result">");
	    	 
	    		  //alert('입력성공');
	    		  $('#name').val('');
	    		  $('#age').val('');
	    		  $('#tel').val('');
	    		  $('#addr').val('');
	    		  
	    		  selectData();
	    	  }
	      })
      })// end of click #btnInsert
	
      //가져오기 버튼이 눌렷을때
      $('#btnSelect').click(selectData);
    	
      function selectData(){
    	  //alert('ok');
    	  $.ajax({
    		url : 'DataSelect.jsp' 
    		, dataType : 'xml'
    		, success :	selectResult
    	  })
      }
    	  
   	 function selectResult(result){
   		//console.log(result);
   		var person = $(result).find('person');
   		
   		$('#tbd').empty();
   		
   		person.each(function(){
   			var name = $(this).find('name').text();
   			var age = $(this).find('age').text();
   			var tel = $(this).find('tel').text();
   			var addr = $(this).find('addr').text();
   			
   			$('#tbd').append('<tr>'
   				+ '<td>' + name + '</td>'
   				+ '<td>' + age + '</td>'
   				+ '<td>' + tel + '</td>'
   				+ '<td>' + addr + '</td>'
   				+ '<td><input type="button" class="del" value="삭제"></td>'
   				+ "</tr>"
			);
   			$('#tbd').on('click','.del',function(){
   				//alert("aw");
   				$(this).parents('tr').remove();
   				
   			})
   		})
   		
   	 }
      
})


</script>

</head>


<!-- <body> -->
<body>

<h2> 고객정보 입력 </h2>

<form name="inForm" method="post">
<table border = 1>
	<tr>
		<td width="80" align="center">Name</td>
		<td width="50" align="center">Age</td>
		<td width="100" align="center">Tel</td>	
		<td width="250" align="center">Addr</td>
	</tr>
	<tr>
		<td align="center"><input type="text" size="8" name="name" id="name"></td>
		<td align="center"><input type="text" size="4" name="age" id="age"></td>
		<td align="center"><input type="text" size="12" name="tel" id="tel"></td>
		<td align="center"><input type="text" size="30" name="addr" id="addr"></td>
	</tr>
	<tr>
		<td colspan="4" align="center"> 
			<input type="button" id='btnInsert' value="입력">
		</td>
	</tr>
</table>

</form>
<br>
<hr>

<h2> 고객정보 목록보기  </h2>
<table border='0' width="510"> 
	<tr>
		<td align="right"><input type="button"  id='btnSelect' value="가져오기"></td>
	</tr>
</table>
<table border = 1 id="listTable">
	<tr>
		<td width="80" align="center">Name</td>
		<td width="50" align="center">Age</td>
		<td width="100" align="center">Tel</td>	
		<td width="250" align="center">Addr</td>
	</tr>
	<tbody id='tbd'></tbody>
</table>
<div id="myDiv"> </div>

</body>
</html>