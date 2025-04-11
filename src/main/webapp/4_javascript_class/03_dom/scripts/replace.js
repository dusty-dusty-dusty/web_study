
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
	list.onclick = function(evt){
		var isbn = evt.target.getAttribute('data-isbn');
		//alert(isbn);
		
		if(isbn){
			//img src'해당경로' height 150 width 100
			var img = document.createElement('img');
			img.height = 150;
			img.width = 100;
			img.src = 'images/' + isbn + ".jpg";
			//console.log(img);
			
			//pic.appendChild(img);
			var imgLength = pic.getElementsByTagName('img').length;
			if (imgLength > 0){
				pic.replaceChild(img, pic.lastChild)
			}else{
				pic.appendChild(img);
				del.disabled=false;
			}
		}
	}

  
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
  del.onclick = function(){
	  del.disabled=true;
	  
	  pic.removeChild(pic.lastChild);
  }
  
  
//};
