window.onload = function(){

		var frm = document.getElementById('frm');
		var inputs = document.querySelectorAll("input");
		

		frm.onsubmit = function(){
			//고유의 이벤트 기능 막기
			e.preventDefault();
			e.stopPropagation();
			
			//체크 박스의 체크여부
			var agree = frm.agree;
			//alert(agree.checked);
			if (!agree.checked){
				alert('반드시 약관을 확인 하여야 합니다.')
				return;
			}
			
			//다시 원래 기능 (전송)
			frm.submit();
		}
	}