$(document).ready(function(){
	//왼쪽메뉴 하위메뉴 내려움.
	$(".mainMenu").on("click mouseenter", function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
		//해당되는 하위메뉴만 내려온다.
		$(this).next().stop().slideDown();
	});
	//왼쪽메뉴 영역에서 마우스를 벗어나면.
	$("#left ul").mouseleave(function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
	});
	//왼쪽메뉴 마지막항목이 탭키를 벗어날때.(포커스를 잃을때)
	$("#left ul li:last-child nav a:last-child").blur(function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
	});
	
	//슬라이드: 2.8초 간격으로 slide02라는 이름을 가진 함수를 계속 호출
	const slide01 = setInterval(slide02,2800);
	let i = 3;
	function slide02(){
		i--;
		//인덱스번호(i) 0과 같다면,
		if(i==0){
			$("#slide a").fadeIn();
			i=3;
		}else{
			//i가 2이거나 1의 경우,
			$("#slide a").eq(i).fadeOut();
		}		
	}
	
	//공지사항<=>갤러리 전환하기
	$("h2 button").click(function(){
		//공지사항(갤러리)의 button의 부모(h2) 아이디 이름을 변수(bb)에 넣는다.
		const bb = $(this).attr("id");
		//console.log(bb); //b1 또는 b2가 반환된다.
		$("h2").removeClass("active");
		if( bb=="b1" ){
			$("#notice h2").addClass("active");			
			$("#notice ul").show();
			$("#gallery>div").hide();
			$("#noti_gel hr").css("margin-top","0");
		}
		if( bb=="b2" ){
			$("#gallery h2").addClass("active");
			$("#notice ul").hide();			
			$("#gallery>div").show();
			$("#noti_gel hr").css("margin-top","1px");
		}
		
	});////////////
	
	//팝업보이기 : 공지사항 첫번째 항목 클릭.
	$("#notice li:first-child a").click(function(){
		$("#popup").fadeIn();
	});/////////////
	
	//팝업닫기 : 팝업 닫기버튼.
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});///////////////
	


});////////////end


