<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>아이디 중복 검사</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	$('#id_check').click(function(){
		// [1] 입력값 가져오기
		var param = { id : $('.userinput').val() };

		// [2] Ajax 요청
		$.ajax({
			type: 'get',
			data: param,
			url: 'IdCheck.jsp',
			dataType: 'text',
			success: function(data) {
				// 앞뒤 공백 제거
				if(data.trim() == 'YES') {
					$('#idmessage').text('이미 사용중인 아이디입니다').show();
				} else {
					$('#idmessage').text('사용 가능합니다').show();
				}
			},
			error: function(err) {
				alert('요청 실패');
				console.log(err);
			}
		});
	});
});
</script>
</head>

<body>

<input name="id" type="text" class="userinput" size="15" />
<button type="button" id="id_check">중복체크</button><br/><br/>
<div id="idmessage" style="display:none;"></div>

</body>
</html>
