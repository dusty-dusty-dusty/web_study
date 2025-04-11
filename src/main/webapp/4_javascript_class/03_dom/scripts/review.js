
window.onload = function(){
	
	var img = document.querySelector('#profile > img');
	
	var users = document.querySelectorAll('.user');
	
	//'나는 누구' 글자를 클릭햇을떼
	var h3 = document.querySelector('#btn');
	h3.onclick = function(){
		img.src = 'images/me.png';
		users[0].innerHTML = '이름 : 김주현';
		users[1].innerHTML = '주소 : 산본';
		users[2].innerHTML = '연락처 : 01087489622';
	}
	
}