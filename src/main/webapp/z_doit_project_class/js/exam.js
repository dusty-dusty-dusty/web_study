/*/*(1) 오늘 날짜 출력 (10점)
(2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
(3) 탭팬 구현 (20점)
(4) 이미지슬라이드 구현 (10점)
(5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임 (20점)
(6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (10점)
(7) 그 외 추가적으로 구현하면 해당 화면 캡쳐 파일을 추가로 업로드 합니다. (20점)*/

      /*<span class="year">0000</span> 년
      <span class="month">00</span> 월
      <span class="date">00</span>일*/

//1 
$(document).ready(function() {    
	var today = new Date();
	
	var year = today.getFullYear();
	var month = today.getMonth();
	var date = today.getDate();
	
	$('.year').text(year);
    $('.month').text(month + '1');
    $('.date').text(date);
	
  });

	
	/*$(function(){
	h.hover(function(){
		h.css({'border':'2px solid green'})
	}  , function(){
		h.css({'border': '3px dashed red'})
	});*/



