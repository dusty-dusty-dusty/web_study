/**
 * 
 */

 //1. [감추기] 버튼이 클릭했을떄 이미지 사라지게
$(function(){
	 $('#hideButton').click(function(){
		$('#intro > img').fadeOut(3000);
	});
	
	// 2. [보이기] 버튼 클릭시 이미지 보이게
	 $('#showButton').click(function(){
		$('#intro > img').fadeIn(3000);
	});
	
	//3.[감추기 보이기] 버튼 왓다갓다
	/* $('#toggleButton').click(function(){
		// $('#intro > img').toggle(); hide and show 
		$('#intro > img').fadeToggle(1000); //fade out , in 
	});*/
	
	$('#toggleButton').click(function(){
		let img = $('#intro>img');
		
		if(img.is(':visible')){
			img.fadeOut(1000);
			$(this).val('보이기');
		}else{
			img.fadeIn(1000);
			$(this).val('감추기');
		}
		
	});
	
	//테이블의 짝수번째 줄에 CSS의 table_striping 클래스 추가
	//$('#celebs > table > tbody > tr:even').addClass("table_striping");
	
	//테이블의 줄에 마우스 올라갓을때  css의 td_mouseover 클래스추가
	//마우스 나가면 해당 클래스 제거
	//-마우스 엔터 , 마우스 리브 
	//-마우스오버 , 마우스아웃
	// -호버
/*	$('tbody > tr').mouseenter(function(){
		$(this).addClass('td_mouseover')
	})
	
	$('tbody > tr').mouseleave(function(){
		$(this).removeClass('td_mouseover')
	})*/
	
	
	/*$('tbody > tr').mouseover(function(){
		$(this).addClass('td_mouseover')
	})
	
	$('tbody > tr').mouseout(function(){
		$(this).removeClass('td_mouseover')
	})*/
	
	$('tbody > tr').hover(function(){
		$(this).addClass('td_mouseover')
	}  , function(){
		$(this).removeClass('td_mouseover')
	});
	
	
})